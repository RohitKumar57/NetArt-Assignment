import './App.css';
import Header from './components/Header/header';
import Comp from './components/Body/comp';
import Tool from './components/Tool/tool';

function App() {
  return (
    <>
    <div className='main-body'>
      <Header />
      <Comp/>
      <Tool/>
    </div>
    </>
  );
}

export default App;
