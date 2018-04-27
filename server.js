
const express = require('express');
const bodyParser = require('body-parser');
const posts = require('./routes').posts;
const comments = require('./routes').comments;

let store = {
  posts: [
    {
	id: 0,
	name: 'Learn these 5 easy ways to make money',
    url: 'https://realblog.com/5-ways-make-money',
    text: 'First, you will need to have a reliable job and at least 2 acorns',
    comments: [
      {id:0, text: 'Perfect! Followed 5/5 Steps now I am an millionaire.'},
      {id:1, text: 'I think I didn\'t do it right, cause my checking account shows negative moneys. Please advise.'},
      {id:2, text: 'My sister\'s nephew\'s cousin makes 99/hr from home, learn how he does it by clicking here >> www.goo.gl/DoNTClik'} 
    ]
  }
]
};


let app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.store = store;
  next();
})

// Post Managing.
app.get('/posts', posts.getPosts);
app.post('/posts', posts.addPost);
app.put('/posts/:id', posts.updatePost);
app.delete('/posts/:id', posts.removePost);

// Comment Managing.
app.get('/posts/:postId/comments', comments.getComments);
app.post('/posts/:postId/comments', comments.addComment);
app.put('/posts/:postId/comments/:commentId', comments.updateComment);
app.delete('/posts/:postId/comments/:commentId', comments.removeComment);

// HEY listen!
app.listen(3000);