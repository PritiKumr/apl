var AllPosts = React.createClass({

render(){
	return(
			<div>
			  <h2><a href={"/ideas/" + this.props.id}>{this.props.name}</a></h2>
		      
		      <p>{this.props.content}</p>
		      <h5><span className="glyphicon glyphicon-time"></span> Post {this.props.date}.</h5>
		      <hr></hr>
		      </div>

	)
}

});