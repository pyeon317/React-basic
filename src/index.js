import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 /*  
  <React.StrictMode>
  </React.StrictMode>
   */
  <App />
);

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/* 
- return (JSX) 문장을 반환합니다.
- export default App 로 모듈을 빼냅니다.
- Index.js 파일에서 <App/> 로 사용됩니다.
- JSX란?

JS의 확장 문법으로 (HTML에 JS코드를 녹여낸 형태) 입니다.

- 코드를 수정하게 될 때 자동으로 화면이 리렌더링 됩니다. (웹팩 로더가 동작)
- Webpack Loader는 직접 설정(커스터마이징)도 가능하고, create react-app 생성시 자동으로 해줍니다.
 */