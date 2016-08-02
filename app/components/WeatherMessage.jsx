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
            <h3>It is {degree} in {cityName}!</h3>
        </div>
    );
};

module.exports = WeatherMessage;
