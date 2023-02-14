import "./App.css";
import Footer from "./Footer";
import Info from "./Info";
import About from "./About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src="logo.png" alt="logo" className="logo" />
        </div>
        <button className="header-btn">Get priority access</button>
      </header>
      <main>
        <About />
        <Info />
        <Footer />
      </main>
    </div>
  );
}

export default App;
