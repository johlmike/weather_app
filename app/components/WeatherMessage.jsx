var React = require('react');
var PropTypes = React.PropTypes;

var WeatherMessage = React.createClass({
    getDefaultProps: function() {
        return {
            degree: '',
            cityName: '',
            hide: {
                display: 'none'
            }
        };
    },
    render: function() {
        var degree = this.props.degree;
        var cityName = this.props.cityName;
        var hide = {};
        if (this.props.hide)
            hide = {
                display: 'none'
            }
        return (
            <div style={hide}>
                <h1>It is {degree} in {cityName}!</h1>
            </div>
        );
    }

});

module.exports = WeatherMessage;
