
import './App.css';
import Movies from './components/Movies'
import ReactDOM from 'react-dom'
import Main from './components/Main';

function App() {
   return (
    <div className="App">
         <Main/>
    </div>
  );
}

ReactDOM.render(
  <App/>, document.getElementById('root')
);

export default App;
