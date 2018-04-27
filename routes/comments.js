module.exports = {
  getComments(req, res) {
	if(!req.store.posts[req.params.postId]) return res.status(404).send({ msg: 'Post Not Found'});
	
    res.status(200).send(req.store.posts[req.params.postId].comments);
  }, 
  addComment(req, res) {
	let post = req.store.posts[req.params.postId];
		
	if(!post) return res.status(404).send({ msg: 'Post Not Found'});
	
	let newComment = { 
			id: 		post.comments.length,
			text: 		req.body.text, 		
	};
	
	post.comments.push(newComment);

	res.status(201).send({id: newComment.id});
  },
  updateComment(req, res) {
    let post = req.store.posts[req.params.postId];
	if(!post) return res.status(404).send({ msg: 'Post Not Found'});
	
	Object.assign(post.comments[req.params.commentId], req.body);
    res.status(200).send(post.comments[req.params.commentId])  
	
  },
  removeComment(req, res) {
    let post = req.store.posts[req.params.postId];
	if(!post) return res.status(404).send({ msg: 'Post Not Found'});
	
	post.comments.splice(req.params.commentId, 1);
	res.status(204).send();	
  }  
}