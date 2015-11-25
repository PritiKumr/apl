var AllPosts = React.createClass({
render(){
	return(
			<div>

			  <h2>{this.props.name}</h2>
		      
		      <p>{this.props.content}</p>
		      <h5><span className="glyphicon glyphicon-time"></span> Post {this.props.date}.</h5>
		      <hr></hr>
		      </div>

	)
}

});