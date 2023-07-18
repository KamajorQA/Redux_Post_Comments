import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateComment } from '../../redux/actions';

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
    console.log('single comment input value', e.target.value);
    setCurrentCommentText(e.target.value);
  };

  const handleSingleCommentSubmit = (e) => {
    e.preventDefault();
    dispatch(updateComment(currentCommentText, id));
  };

  return (
    <form className="comments-item" onSubmit={handleSingleCommentSubmit}>
      <div className="comments-item-delete">&times;</div>
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
