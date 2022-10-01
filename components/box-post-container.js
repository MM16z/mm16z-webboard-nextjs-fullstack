function PostBoxContainer(probs) {
  const { username, title, postcontent, postdate } = probs;
  return (
    <div className="post-box-container">
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
      <span className="profile-circle-line"></span>
      <span className="username">{username}</span>
      <span className="title">{title}</span>
      <span className="line5"></span>
      <span className="line6"></span>
      <span className="post-content">{postcontent}</span>
      <span className="post-date">{postdate}</span>
      <span className="line4"></span>
    </div>
  );
}

export default PostBoxContainer;
