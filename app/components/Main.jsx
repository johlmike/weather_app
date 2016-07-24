var React = require('react');
var Navbar = require('Navbar');

var Main = React.createClass({

    render: function() {
        return (
            <div>
                <Navbar />
                <h1>Main Component</h1>
                {this.props.children}
            </div>
        );
    }

});

module.exports = Main;
