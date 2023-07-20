import { useSelector, useDispatch } from 'react-redux';
import { writeTitle } from '../../redux/actions';

function Title() {
  const titleText = useSelector((state) => {
    return state.titleReducer.text;
  });
  const dispatch = useDispatch();

  const handleChange = function (event) {
    dispatch(writeTitle(event.target.value));
  };

  return (
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={handleChange}></input>
      </div>
      <p>{titleText}</p>
    </div>
  );
}

export default Title;
