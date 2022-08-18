import React, { useState, useEffect, useCallback } from 'react';


const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
});

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    
    const remainingDuration = adjExpirationTime - currentTime;
    
    return remainingDuration;
}

let logoutTimer;

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if(remainingTime <= 60000) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime
  };
};
  
export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  // 인증 상태를 여기서 관리
  let initialToken;
  if(tokenData) { 
    initialToken = tokenData.token;
  }
  
  const [token, setToken] = useState(initialToken);
  // 토큰이 없으면 로그인 상태 x, 토큰이 있으면 로그인 상태
  
  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');

    if(logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);
  
  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);
    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
    // 사용자가 로그아웃 했는데도 작동하면 이상함, 수정해야함
  };

  useEffect(() => {
    if(tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
      token,
      isLoggedIn: userIsLoggedIn,
      login: loginHandler,
      logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
    );
};

export default AuthContext;




