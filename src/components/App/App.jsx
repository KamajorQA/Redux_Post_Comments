import Vincent from '../../assets/img/Vincent.jpg';
import Likes from '../Likes/Likes';
import './app.css';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src={Vincent} alt="Vincent Vega" />
            <Likes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
