import React from 'react';
import { useEffect } from 'react';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

// const DUMMY_QUOTES = [
//     { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
//     { id: 'q2', author: 'Maximilian', text: 'Learning React is great!'},
//     { id: 'q3', author: 'Steve', text: 'Wow......'}
// ];

const AllQuotes = () => {
    
    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
}, [sendRequest]);

    if(status === 'pending') {
        return <div className='centered'><LoadingSpinner /></div>
    }

    if(error) {
        return <p className='centered focused'>{error}</p>
    }

    if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />
    }

    return (
        <QuoteList quotes={loadedQuotes}/>
    );
};

export default AllQuotes;

// 작은 단위여도 명시적으로 컴포넌트화시켜서 분리하니 찾기도 편하고 보기 좋은듯함
// 프로젝트에 로딩스피너 좋을거같음.