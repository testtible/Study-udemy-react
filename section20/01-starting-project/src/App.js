import { Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
      <div>
          <MainHeader />
          <main>
              <Switch>
                  <Route path="/welcome">
                      <Welcome />
                  </Route>
                  <Route path="/products" exact>
                      <Products />
                  </Route>
                  <Route path="/products/:productId">
                      <ProductDetail />
                  </Route>
              </Switch>
          </main>
      </div>
  );
}

export default App;


// Route는 실제 컴포넌트가 됨
// path는 url의 경로여야함
// 리액트 라우터는 URL을 평가하고, URL을 기반으로 올바른 컴포넌트를 렌더링하는지 확인
// 해당 경로만 정의하는 것 외에도 할 것이 있음.
// 경로를 지정한 컴포넌트는 pages 폴더에 명시하는게 보기 좋음.

// a 태그를 사용하여 링크하면 계속 새로고침이 되어 좋지않음. ( 새 페이지 로드 ) => 해결 방법: link 컴포넌트를 이용하면 됨(react-router-dom)

// :productId <===== 동적 경로 세그먼트, 동적 세그먼트는 무슨 값을 사용해도 가능함.
// switch가 없으면 동적 경로 세그먼트를 직접 url을 입력하여 움직여야 함.
// 리액트 라우터가 동작하는 방식은 해당 url이면 동시에 적용 

// switch 컴포넌트는 라우트 컴포넌트 주위에 래핑될 수 있음. => route 컴포넌트 주위에 래핑하면
// 하나의 라우트만 작동함. ( 가장 먼저 마주치는 라우트 )
// 리액트 라우터는 위에서 아래로 탐색하며, 일치하는 항목은 전체경로가 아니라 경로의 시작부분

// exact를 사용하면 정확한 url일때만 그 라우트가 동작
