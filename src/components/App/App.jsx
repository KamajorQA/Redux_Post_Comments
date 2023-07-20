import Vincent from '../../assets/img/Vincent.jpg';
import Comments from '../Comments/Comments';
import Likes from '../Likes/Likes';
import Spinner from '../Spinner/Spinner';
import Title from '../Title/Title';
import './app.css';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Spinner />
        <div className="card">
          <div className="card-image">
            <img src={Vincent} alt="Vincent Vega" />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
