var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navbar = (props) => {
    return (
        <div>
            <h2>React Weather</h2>
            <IndexLink to='/' activeClassName='active' activeStyle={{fontSize: '30px'}}>Weather</IndexLink>
            <Link to='about' activeClassName='active' activeStyle={{fontSize: '30px'}}>About</Link>
            <Link to='example' activeClassName='active' activeStyle={{fontSize: '30px'}}>Example</Link>
        </div>
    );
};

module.exports = Navbar;
