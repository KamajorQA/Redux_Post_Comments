import { useState, useEffect } from 'react';

function SingleComment({ data }) {
  const { commentText, id } = data;
  const [currentCommentText, setCurrentCommentText] = useState('');

  useEffect(() => {
    if (!!commentText) {
      setCurrentCommentText(commentText);
    }
  }, [commentText]);

  const handleSingleCommentInput = (e) => {
    // console.log('single comment input value', e.target.value);
    // setCurrentCommentText(e.target.value);
  };

  return (
    <form className="comments-item">
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
