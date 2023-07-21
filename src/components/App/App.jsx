import { useSelector } from 'react-redux';
import Vincent from '../../assets/img/Vincent.jpg';
import Comments from '../Comments/Comments';
import Likes from '../Likes/Likes';
import Spinner from '../Spinner/Spinner';
import Title from '../Title/Title';
import './app.css';

function App() {
  const errorStatus = useSelector((state) => state.loaderReducer.error);

  return (
    <div className="App">
      <div className="wrap">
        <Spinner />
        <div className="card">
          {!!errorStatus && <div className="error-message">{errorStatus}</div>}
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
