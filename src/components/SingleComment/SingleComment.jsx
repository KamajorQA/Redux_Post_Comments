import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateComment, deleteComment } from '../../redux/actions';

function SingleComment({ data }) {
  const { commentText, id } = data;
  const [currentCommentText, setCurrentCommentText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!commentText) {
      setCurrentCommentText(commentText);
    }
  }, [commentText]);

  const handleSingleCommentInput = (e) => {
    setCurrentCommentText(e.target.value);
  };

  const handleSingleCommentUpdate = (e) => {
    e.preventDefault();
    dispatch(updateComment(currentCommentText, id));
  };

  const handleCommentDelete = (e) => {
    e.preventDefault();
    dispatch(deleteComment(id));
  };

  return (
    <form className="comments-item" onSubmit={handleSingleCommentUpdate}>
      <div className="comments-item-delete" onClick={handleCommentDelete}>
        &times;
      </div>
      <input
        type="text"
        value={currentCommentText}
        onChange={handleSingleCommentInput}
      />
      <input type="submit" hidden />
    </form>
  );
}

export default SingleComment;
