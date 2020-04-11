import React from 'react';

import Comment from './Comment';

function Post({ data }) {
  return (
    <li className="post">
      <div className="postUser">
        <img src={data.author.avatar} alt="Avatar"/>
        <strong >{data.author.name} <span>{data.date}</span></strong>
      </div>
      <p>{data.content}</p>
      <ul className="comments">
        {data.comments.map(comment =>
          <Comment key={comment.id} data={comment} />)}
      </ul>
    </li>
  );
}

export default Post;