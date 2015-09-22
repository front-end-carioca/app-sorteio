// Object to Request
var request = new XMLHttpRequest();

// Start of the component
var AppSorteio = React.createClass({
	getInitialState: function(){
		return {
			data: []
		}
	},

	requestDataUser: function() {
		url = this.props.source;
	    request.open('GET', url);
	    request.onload = function() {
		    if (request.status >= 200 && request.status < 400){
		        var dados = JSON.parse(request.responseText),
		        	posit = Math.floor(Math.random() * dados.length),
		            name  = dados[posit].FIELD1;
		            document.querySelector('p').innerHTML = name;
			 }else {
			    console.log('Erro on request', dados);
		    }
		}
	  request.send();
	},

	handleClick: function(){
		this.requestDataUser();
	},

	render: function(){
		return (
			<div className="HoldComponent">
				<div className="content">
					<div className="ElementHeader">
						<img src={this.props.path} alt={this.props.alt} id="imgCenter" />
						<h1>{this.props.title}</h1>
					</div>
					<div className="littleComponet">
						<p></p>
						<button onClick={this.handleClick} id="sortear">Sortear</button>
					</div>
				</div>
			</div>
		)
	}
});

React.render(<AppSorteio 
	title  = 'App Sorteio - Front-end Carioca'
	path   = 'assets/img/logo-header.png' 
	alt    = 'Front-end carioca 2015'
	source = 'assets/js/data.json' />, document.getElementById('HoldMain'));