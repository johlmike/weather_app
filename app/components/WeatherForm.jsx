var React = require('react');

var WeatherForm = React.createClass({
    getWeather: function(e) {
        e.preventDefault();
        console.log('Get Weather');
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.getWeather}>
                    <input type="text" ref="cityName" />
                    <button type='submit'>Get Weather</button>
                </form>
            </div>
        );
    }

});

module.exports = WeatherForm;
