import { connect } from 'react-redux';
import { ReactComponent as Heart } from '../../assets/img/icons/heart.svg';

function Likes(props) {
  console.log('render > ', props);
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>
        <Heart />
        {props.likes}
      </button>
      <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  );
}

function mapStateToProps(state) {
  console.log('mapStateToProps >>> ', state);
  const { likes } = state;
  return {
    likes: likes.likes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => {
      console.log('click');
      const action = {
        type: 'INCREMENT',
      };
      dispatch(action);
    },
    onDecrementLikes: () => {
      console.log('decrease');
      const action = {
        type: 'DECREMENT',
      };
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
