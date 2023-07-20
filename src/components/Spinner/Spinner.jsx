import { useSelector } from 'react-redux';
import { Comment } from 'react-loader-spinner';

function Spinner() {
  const loadingStatus = useSelector((state) => {
    return state.loaderReducer.loading;
  });
  return (
    <div className="loader-styles">
      <Comment width="70" backgroundColor="#82BBDC" visible={loadingStatus} />
    </div>
  );
}

export default Spinner;
