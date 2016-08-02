var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
    return (
        <div>
            <h1 className='text-center'>Example</h1>
            <p>You can find some example here.</p>
            <ul>
                <li>
                    <Link to='/?q=taipei'>Taipei, TW</Link>
                </li>
                <li>
                    <Link to='/?q=tokyo'>Tokyo, JP</Link>
                </li>
            </ul>
        </div>
    );
};

module.exports = Example;
