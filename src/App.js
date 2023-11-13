import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Mycomponent1 extends Component {
  render(){
    return(
      <div>
        [미리 만든 빌딩 한 층]
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Mycomponent1></Mycomponent1>
      <Mycomponent1></Mycomponent1>
      <Mycomponent1></Mycomponent1>
      <Mycomponent1></Mycomponent1>
      <Mycomponent1></Mycomponent1>
      <Mycomponent1></Mycomponent1>
      <Mycomponent1></Mycomponent1>
    </div>
  );
}

export default App;
