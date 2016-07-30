var React = require('react');
var Navbar = require('Navbar');

var Main = (props) => {
    return (
        <div>
            <Navbar />
            <h1>Main Component</h1>
            {props.children}
        </div>
    );
};

module.exports = Main;
