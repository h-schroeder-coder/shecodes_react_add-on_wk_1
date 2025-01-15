import "./App.css";
import BookLover from "./BookLover.png";
import Footer from "./Footer";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={BookLover}
            className="bookLoverImage img-fluid"
            alt="bookLoverImage"
          />
          <h1>Dictionary</h1>
        </header>
        <Dictionary />
        <Footer />
      </div>
    </div>
  );
}
