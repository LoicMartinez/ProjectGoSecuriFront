import './App.css';
import RoutePage from "./container/route";
import Header from "./components/header";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <RoutePage/>
        </header>
      </div>
  );
}

export default App;
