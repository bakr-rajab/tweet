<?php
Route::get('/',function(){
	return "hello";
});
Auth::routes();
     
Route::group([ 'middleware'=>['auth']],function (){
    Route::get('/','TimeLineController@index');
    Route::post('/posts','PostController@create');
    Route::get('/posts','PostController@index');

    //user
    Route::get('/users/{user}','UserController@index');
    Route::get('/users/{user}/follow','UserController@follow')->name('users.follow');
    Route::get('/users/{user}/unfollow','UserController@unfollow')->name('users.unfollow');

});

/**
 * 	// getPosts() {
	// 	this.setState({ loading: true });
	// 	axios.get('/posts').then((response) =>
	// 		this.setState({
	// 			posts: [ ...response.data.posts ],
	// 			loading: false
	// 		})
	// 	);
	// }
	// componentWillMount() {
	// 	this.getPosts();
	// }

 */
