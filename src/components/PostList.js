import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
  render() {
    return(
      <div className="postListDiv">
        <ul className="postList">
          <Post />
          <Post />
          <Post />
        </ul>
      </div>
    );
  };
}

export default PostList;