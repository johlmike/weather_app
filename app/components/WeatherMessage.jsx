var React = require('react');

var WeatherMessage = (props) => {
    var degree = props.degree;
    var cityName = props.cityName;
    var hide = {};
    if (props.hide)
        hide = {
            display: 'none'
        };
    return (
        <div style={hide}>
            <h1>It is {degree} in {cityName}!</h1>
        </div>
    );
};

module.exports = WeatherMessage;
