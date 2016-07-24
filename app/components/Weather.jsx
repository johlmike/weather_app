var React = require('react');
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

var Weather = React.createClass({

    render: function() {
        var ifHide = true;
        return (
            <div>
                <h2>Get Weather</h2>
                <WeatherForm />
                <WeatherMessage hide={ifHide} />
            </div>
        );
    }

});

module.exports = Weather;
