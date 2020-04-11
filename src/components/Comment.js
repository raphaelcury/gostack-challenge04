import React from 'react';

function Comment({ data }) {
  return(
    <li className="comment">
      <img src={data.author.avatar} alt="Avatar"/>
        <strong>{data.author.name}<span> {data.content}</span></strong>
    </li>
  )
}

export default Comment;
