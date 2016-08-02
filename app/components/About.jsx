var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className='text-center'>About</h1>
            <p>This is a demo react app created by Johlmike.</p>
            <h3>Tool List:</h3>
            <ul>
                <li><a href='https://facebook.github.io/' target='_blank'>React</a> - Front-end framework by Facebook</li>
                <li><a href='http://openweathermap.org/' target='_blank'>Open Weather Map</a> - Get weather information</li>
            </ul>
        </div>
    );
};

module.exports = About;
