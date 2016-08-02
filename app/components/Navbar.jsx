var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navbar = React.createClass({
    onSearch: function(e) {
        e.preventDefault();
        console.log('Not Yet');
    },
    render: function() {
        return (
            <div className='top-bar'>
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather</li>
                        <li>
                            <IndexLink to='/' activeClassName='active' activeStyle={{
                                fontWeight: 'bold'
                            }}>Weather</IndexLink>
                        </li>
                        <li>
                            <Link to='about' activeClassName='active' activeStyle={{
                                fontWeight: 'bold'
                            }}>About</Link>
                        </li>
                        <li>
                            <Link to='example' activeClassName='active' activeStyle={{
                                fontWeight: 'bold'
                            }}>Example</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search Weather"/>
                            </li>
                            <li>
                                <button type="submit" className="button">Get Weather</button>
                            </li>
                        </ul>
                    </form>
                </div>

            </div>
        );
    }
});

module.exports = Navbar;
