import './App.css';
import BookLover from './BookLover.png';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={BookLover} className="bookLoverImage img-fluid" alt="bookLoverImage" />
        <h1>Dictionary</h1>
      </header>
    </div>
  );
}
