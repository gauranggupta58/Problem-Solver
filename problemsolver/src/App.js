import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Navbar from './componenets/Navbar';
import Question from './componenets/Question';

function App() {
  return (
    <div className="App">
      <div><Navbar/></div>
      <div><Question/></div>
    </div>
  );
}

export default App;
