import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			body: '',
			posts: [],
			loading: false
		};
		//    BIND FUNCTION
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
		// this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	onSubmitHandler(e) {
		e.preventDefault();
		axios.get('/posts').then((response) => {
			// this.setState({
			// 	posts: [ ...response.data.posts ],
			// 	body: ''
			// });
			console.log(response.data.posts);
		});
	}

	render() {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="card">
							<div className="card-header">Tweet something...</div>{' '}
							<div className="card-body">{this.onSubmitHandler()}</div>
						</div>{' '}
					</div>

					<div className="col-md-6">
						<div className="card">
							<div className="card-header">Recent Tweets...</div>
							{this.state.posts.map((post) => {
								return (
									<div key={post.id} className="media ">
										<div className="d-flex flex-column ">
											<img className="rounded-circle m-1 " src={post.user.avatar} alt="avatar" />
										</div>
										<div className="pl-1 media-body justify-content-center">
											<a className="ml-0" href={`/users/${post.user.username}`}>
												<p> {post.user.username} </p>
											</a>
											<div className="justify-content-center mt-1"> {post.body} </div> <br />
											<br />
											<hr />
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
