import { Fragment } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  console.log(location)
  const queryParams = new URLSearchParams(location.search);
  // 원래 브라우저 함수에 존재
  const isSortingAscending = queryParams.get('sort') === 'asc';
  const changeSortingHandler = () => {
    // url의 쿼리매개변수를 수정
    history.push(`${location.pathname}?sort=${isSortingAscending ? 'desc' : 'asc'}`);
    // history push가 컴포넌트를 계속 렌더링함.
    // 이것을 history.push({pathname: location.pathname, search: `?sort=${isSortingAscending ? 'desc' : 'asc'}` 로 변경 가능})
  };

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
