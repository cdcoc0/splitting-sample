import React, {useState, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
//import notify from './notify';
//const SplitMe = React.lazy(() => import('./SplitMe'));
import loadable from '@loadable/component';
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          {/* 마우스를 커서에 올리면 로딩 시작, 클릭했을 때 바로 렌더링 */}
          Hello React!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
  
}

export default App;
