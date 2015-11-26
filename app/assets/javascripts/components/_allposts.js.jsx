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
			  <h2><a href={"/ideas/" + this.props.v.id}>{this.props.v.title}</a></h2>
		      
		      <p>{this.props.v.description}</p>
		      <h5><span className="glyphicon glyphicon-time"></span> Post {this.props.date}.</h5>
		      <hr></hr>
		      </div>

	)
}

});