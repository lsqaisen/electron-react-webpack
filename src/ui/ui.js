require('./css/ui.css');
var React = require('react');
var ReactDOM = require('react-dom');
var SecurityChooser = require('./jsx/securityChooser');


ReactDOM.render(<SecurityChooser/>, document.getElementById('security'));
