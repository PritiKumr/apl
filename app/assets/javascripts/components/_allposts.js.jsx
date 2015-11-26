var AllPosts = React.createClass({
componentDidMount() {
		console.log("Hello!");
	},

	componentWillMount() {
		console.log("Hello Will!");
	},

render(){
	return(
			<div>
			  <h2><a href={"/ideas/" + this.props.id}>{this.props.name}</a></h2>
		      
		      <p>{this.props.text}</p>
		      <h5><span className="glyphicon glyphicon-time"></span> Post {this.props.date}.</h5>
		      <hr></hr>
		      </div>

	)
}

});