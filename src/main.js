var React = require('react');
var CommentBox = require('./comment.jsx');
React.renderComponent(
  <CommentBox />,
  document.getElementById('content')
);
