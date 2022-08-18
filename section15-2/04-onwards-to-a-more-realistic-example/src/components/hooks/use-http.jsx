import { useState, useEffect, useCallback } from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        // 여기서 앱 컴포넌트가 재평가됨
        try {
          const response = await fetch(requestConfig.url, {
              method: requestConfig.method ? requestConfig.method : 'GET',
              body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
              headers: requestConfig.headers ? requestConfig.headers : {}
            }
          );
    
          if (!response.ok) {
            throw new Error('Request failed!');
          }
    
          const data = await response.json();
          //post일 때는 키값밖에 안옴
          applyData(data);
          
        } catch (err) {
          setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
      }, []);

      return {
          isLoading,
          error,
          sendRequest
      };
};

export default useHttp;