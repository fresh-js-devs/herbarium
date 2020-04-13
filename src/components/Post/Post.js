import React from "react";

import "./Post.css";

const Post = ({
  onGoToPostDetail,
  familyName,
  bscintificName,
  commonName,
  about,
  img,
}) => {
  return (
    <div onClick={onGoToPostDetail} className="post">
      <div className="post__profile">
        <img src={img} alt="Random user" />
      </div>
      <div className="post__content">
        <div className="post__content-header">
          <h4>{familyName}</h4>
          <span className="profile-name">{bscintificName}</span>
          <span className="post-added">{commonName}</span>
        </div>
        <div className="post__message">{about}</div>
        <div className="post__action-buttons"></div>
      </div>
    </div>
  );
};

export default Post;
