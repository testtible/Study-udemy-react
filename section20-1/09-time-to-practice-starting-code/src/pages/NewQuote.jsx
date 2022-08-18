import React, { useEffect } from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = () => {
    const history = useHistory();
    const { sendRequest, status } = useHttp(addQuote);
    // history는 객체를 제공
    // 페이지 기록에 새 페이지가 표시되는 것은 push
    // 현재 페이지를 대체하는 것은 replace
    // push를 사용하면 백 버튼을 사용하여 원래 페이지로 돌아갈 수 있음.
    // replace를 사용하면 그럴순 없음.
    useEffect(() => {
        if(status === 'completed') {
            history.push('/quotes');
        }
    }, [status, history]);

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
    };

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
    );
};

export default NewQuote;