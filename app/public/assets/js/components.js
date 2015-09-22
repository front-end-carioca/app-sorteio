// Object to Request
var request = new XMLHttpRequest();

// Start of the component
var AppSorteio = React.createClass({displayName: "AppSorteio",
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
			React.createElement("div", {className: "HoldComponent"}, 
				React.createElement("div", {className: "content"}, 
					React.createElement("div", {className: "ElementHeader"}, 
						React.createElement("img", {src: this.props.path, alt: this.props.alt, id: "imgCenter"}), 
						React.createElement("h1", null, this.props.title)
					), 
					React.createElement("div", {className: "littleComponet"}, 
						React.createElement("p", null), 
						React.createElement("button", {onClick: this.handleClick, id: "sortear"}, "Sortear")
					)
				)
			)
		)
	}
});

React.render(React.createElement(AppSorteio, {
	title: "App Sorteio - Front-end Carioca", 
	path: "assets/img/logo-header.png", 
	alt: "Front-end carioca 2015", 
	source: "assets/js/data.json"}), document.getElementById('HoldMain'));