import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { createComment } from '../../redux/actions.js';
import SingleComment from '../SingleComment/SingleComment';

function Comments(props) {
  const [commentText, setCommentText] = useState('');

  const dispatch = useDispatch();

  const commentsArray = useSelector((state) => {
    console.log('Comments component state from useSelector >> ', state);
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });

  const handleCommentInput = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentsSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(createComment(commentText, id));
  };

  return (
    <div className="card-comments">
      <form className="comments-item-create" onSubmit={handleCommentsSubmit}>
        <input type="text" value={commentText} onChange={handleCommentInput} />
        <input type="submit" hidden />
      </form>
      {!!commentsArray.length &&
        commentsArray.map((elem) => {
          return <SingleComment data={elem} key={elem.id} />;
        })}
    </div>
  );
}

export default Comments;
