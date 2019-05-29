import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
	// constructor(props){
	//     super(props)
	//         this.state={
	//             name:"",
	//             tasks:[],
	//         }
	//     // bind
	//     this.onChangeHandeler=this.onChangeHandeler.bind(this);
	//     this.onSubmitHandeler=this.onSubmitHandeler.bind(this);
	//     this.renderTasks=this.renderTasks.bind(this);
	//
	// }
	// // handel change functions
	// onChangeHandeler(e){
	//     this.setState({
	//         name:e.target.value,
	//     });
	// }
	// onSubmitHandeler(e){
	//     e.preventDefault();
	//         axios.post('/tasks',{
	//             'name':this.state.name,
	//         }).then(
	//             response =>{
	//                 this.setState({
	//                    tasks:[response.data,...this.state.tasks],
	//                     name:''
	//                 });
	//                 // console.log('form handle submit',this.state.tasks['name']);
	//             }
	//         );
	//
	// }
	// renderTasks(){
	//     return this.state.tasks.map(task=>(
	//         <ul key={task.id}>
	//             <li key={task.id}>
	//                 {task.name}
	//             </li>
	//         </ul>
	// ));
	// }
	constructor(props) {
		super(props);
		this.state = {
			body: '',
			posts: [],
			loading: false
		};
		//    BIND FUNCTION
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
		this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	onSubmitHandler(e) {
		e.preventDefault();
		axios
			.post('/posts', {
				body: this.state.body
			})
			.then((response) => {
				this.setState({
					posts: [ ...this.state.posts, response.data ],
					body: ''
				});
				// console.log(response.data);
			});
	}

	onChangeHandler(e) {
		this.setState({
			body: e.target.value
		});
	}
	render() {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="card">
							<div className="card-header">Tweet something...</div>{' '}
							<div className="card-body">
								<form onSubmit={this.onSubmitHandler}>
									<div className="form-group">
										<textarea
											onChange={this.onChangeHandler}
											value={this.state.body}
											rows="5"
											className="form-control"
											maxLength="140"
											placeholder="what's happening?"
											required
										/>
									</div>{' '}
									<input type="submit" value="Post" className="form-control" name="submit" />
								</form>{' '}
							</div>
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
