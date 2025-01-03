const CommentBoxContainer = (probs) => {
  const { commentusername, commentcontent } = probs;
  return (
    <div className="reply-box-container">
      <hr></hr>
      <span className="comment-profile-circle-line">
        <span className="comment-profile-circle-img"></span>
      </span>
      <span className="comment-username">{commentusername}</span>
      <span className="comment-post-content">{commentcontent}</span>
    </div>
  );
};

export default CommentBoxContainer;
