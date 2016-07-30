var React = require('react');
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import {getTemp} from '../api/openWeatherMap';

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        };
    },
    handleSearch: function(data) {
        this.setState({
            isLoading: true
        });

        getTemp(data.cityName).then((degree) => {
            this.setState({
                cityName: data.cityName,
                degree: degree,
                ifHide: data.ifHide,
                isLoading: false
            });
        }, (err) => {
            this.setState({
                isLoading: false
            });
            alert(err);
        });
    },
    render: function() {
        var {cityName, degree, ifHide, isLoading} = this.state;
        function renderMessage () {
            if( isLoading ){
                return <h2>Loading. Please Wait.</h2>;
            } else if ( cityName && degree ){
                return <WeatherMessage hide={ifHide} cityName={cityName} degree={degree}/>;
            }
        }
        return (
            <div>
                <h2>Get Weather</h2>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }

});

module.exports = Weather;
