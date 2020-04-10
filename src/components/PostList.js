import React, { Component } from 'react';

class PostList extends Component {
  render() {
    return(
      <div className="postList">
        <ul>
          <li>Post 1</li>
          <li>Post 2</li>
          <li>Post 3</li>
          <li>Post 4</li>
        </ul>
      </div>
    );
  };
}

export default PostList;