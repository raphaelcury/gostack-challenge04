import React from 'react';

import avatar from '../img/avatar.png';

function Post() {
  return (
    <li className="post">
      <div className="postUser">
        <img src={avatar} alt="Avatar"/>
        <strong >Raphael Cury <span>04 Jun 2019</span></strong>
      </div>
      <p>Pessoal, alguém sabe quando acaba a quarentena?</p>
      <ul className="comments">
        <li>Comentário 1</li>
        <li>Comentário 2</li>
        <li>Comentário 3</li>
        <li>Comentário 4</li>
      </ul>
    </li>
  );
}

export default Post;