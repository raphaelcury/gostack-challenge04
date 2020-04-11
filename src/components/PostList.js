import React, { Component } from 'react';

import Post from './Post';

import avatar from '../img/avatar.png';

class PostList extends Component {
  
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar,
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar,
            },
            content: "Claro que não!"
          },
          {
            id: 2,
            author: {
              name: "Fulano de tal",
              avatar,
            },
            content: "Claro que SIM!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Raphael Cury",
          avatar,
        },
        date: "11 Apr 2020",
        content: "Pessoal, alguém sabe quando acaba a quarentena?",
        comments: [
          {
            id: 1,
            author: {
              name: "Bernardo Kamei",
              avatar,
            },
            content: "Não faço a menor ideia, pai!\
            Será que ainda vai demorar muito para isso passar?\
            Será que a mamãe sabe? Certamente iremos estudar\
            isso nos livros de história no futuro. A pandemia\
            de Coronavirus de 2020."
          },
          {
            id: 2,
            author: {
              name: "Helen Kamei",
              avatar,
            },
            content: "Não sei."
          }
        ]
      },
    ]
  };
  render() {
    return(
      <div className="postListDiv">
        <ul className="postList">
          {this.state.posts.map(post => <Post key={post.id} data={post} />)}
        </ul>
      </div>
    );
  };
}

export default PostList;