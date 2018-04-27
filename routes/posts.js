module.exports = {
	getPosts(req, res) { 
		res.status(200).send(req.store.posts)
	},
	addPost(req, res) {
		let newPost = { 
			id: 		req.store.posts.length,
			name: 		req.body.name, 
			url: 		req.body.url,
			text: 		req.body.text, 
			comments: 	[]			
		};

		req.store.posts.push(newPost);
		res.status(201).send({id: newPost.id});
	},
	updatePost(req, res) {
		
		req.store.posts[req.params.id].name = req.body.name;
		req.store.posts[req.params.id].url = req.body.url;
		req.store.posts[req.params.id].text = req.body.text;
		
		res.status(200).send(req.store.posts[req.params.id]);
	},
	removePost(req, res) {
		req.store.posts.splice(req.params.id, 1);
		res.status(204).send();
	}
}