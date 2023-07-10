import Vincent from '../../assets/img/Vincent.jpg';
import store from '../../redux/store';
import Likes from '../Likes/Likes';
import './app.css';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src={Vincent} alt="Vincent Vega" />
            <Likes store={store} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
