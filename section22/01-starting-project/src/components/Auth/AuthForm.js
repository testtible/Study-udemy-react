import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';
import { useHistory } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const history = useHistory();
  const emailInputRef = useRef();
  const pwInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    
    const enteredEmail = emailInputRef.current.value;
    const enteredPw = pwInputRef.current.value;

    setIsLoading(true);
    const key = 'AIzaSyC6AUtqpDh-9LCh_LNI8QwH-VdGOfuMowQ';
    
    let url = isLogin 
    ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`
    : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;

      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPw,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        setIsLoading(false);
        if(res.ok) {
          return res.json();
        }else {
          return res.json().then(data => {
            const errorMessage = data.error.message;
            throw new Error(errorMessage);
          });
        }
      }).then(data => {
        const expirationTime = new Date((new Date().getTime() + (+data.expiresIn * 1000)));
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace('/');
      }).catch(err => {
        alert(err.message);
      })
  };
  
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={emailInputRef} type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input ref={pwInputRef} type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request....</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
