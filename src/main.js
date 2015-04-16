var React = require('react');
var CommentBox = require('./comment.jsx');
var data = [
  {author: "Pete Hunt", text: "(tutorial 13) This is one comment"},
  {author: "Jordan Walke", text: "(tutorial 13) This is *another* comment"}
];
React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
