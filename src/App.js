import './App.css';
import TodoWrapper from './components/TodoWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <TodoWrapper />
      <footer className='footer'>
        Made with <FontAwesomeIcon icon={faHeart} bounce /> by Kaustubh Sinha
        </footer>
    </div>
  );
}

export default App;
