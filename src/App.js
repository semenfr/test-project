// import logo from './logo.svg';
import './App.css';
import './Main.css';
import Header from './components/Header.js';

function App() {
  return (
    <div className="Main">
      <Header />
      <div className="Main-container">
        <div className="Left">
          <h1>Тестовый сайт</h1>
        </div>
      </div>
    </div>
  );
}

// function Main() {
//   return (
//     <div className="Main">
//       <header className="Main-header">
//         <div>
//           className="Logo-link"
//         </div>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit src/App.js and save to reload.
//         </p>
//       </header>
//     </div>
//   );
// }

export default App;
