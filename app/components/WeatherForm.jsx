var React = require('react');

var WeatherForm = React.createClass({
    sendWeatherInfo: function(e) {
        e.preventDefault();
        var data = {
            cityName: this.refs.cityName.value,
            ifHide: false
        }
        if (data.cityName) {
            this.props.onSearch(data);
        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.sendWeatherInfo}>
                    <input type="text" ref="cityName" />
                    <button type='submit'>Get Weather</button>
                </form>
            </div>
        );
    }

});

module.exports = WeatherForm;
