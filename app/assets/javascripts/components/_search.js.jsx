var Search = React.createClass({
	componentDidMount(){
		console.log("Mounted");
	},
	componentWillMount(){
		console.log("Will Mount");
	},
	getInitialState() {
		return{post: []
		}
	},
	fetchResults() {
		var search_text = this.refs.searchtext.value;
		console.log(search_text);
		this.setState({post: []});
		$.ajax({
			data: search_text,
			url: "/post_title_json?query=" + search_text,
			dataType: 'json',
			success: this.successHandler,
			
			error: function(data) {
				console.log(data);
			}.bind(this)
	    });
	},
	successHandler(data) {
    	$("#results").show();
    	for (var i = 0; i < data.length; i++) {
            var option = data[i];
            this.state.post.push(
	                <li key={option.value}> <a href={"/ideas/" + option.value }>{option.name}</a></li>
	            );
        }
        this.forceUpdate();
    },
    
    render(){
		
		return (

			<div className="input-group" id="auto-search-header">

                <form ref="form" id = "Search--Box">
					<input ref="searchtext" type="text" className="form-control" placeholder="Search Blog.." onChange={this.fetchResults}></input>
				</form>
				<div id="results" className="Ev--SearchDropdown">
				{this.state.post}
				</div>
      		</div>
                       
			)
	}
});
