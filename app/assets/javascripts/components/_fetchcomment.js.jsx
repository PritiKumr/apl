var FetchComment = React.createClass({
	render(){
		return (
			<div>
			{this.props.comment.text}
			<h5><span className="glyphicon"></span> {this.props.data} </h5>
			</div>
			)
		}
	
});