var Comments = React.createClass({
	componentDidMount() {
		console.log("Hello!");
	},

	componentWillMount() {
		console.log("Hello Will!");
	},

	passData(){
		var formData = this.refs.textarea.value
		$.ajax({
			data: {
                    path: formData,
                    id: this.props.id
                },
			url: '/comments/create',
			type: "POST",
			success: function(data) {
	      			console.log(data);
	      		}.bind(this),
	      		error: function(data) {
	      			console.log(data);
	      		}.bind(this)
		});
		
	},
	render(){
		return(
			<div>
			<h4>Leave a Comment:</h4> 
			<form ref="form" onSubmit={this.passData}>

        		<div className="form-group">
          			<textarea ref="textarea" className="form-control" id="text-area" rows="3" required></textarea>
        		</div>
        		<button type="submit" className="btn btn-success">Submit</button>
      		</form>

      		</div>
			)
	}
});