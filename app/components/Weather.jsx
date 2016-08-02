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

        getTemp(data.cityName).then(({degree, cityName}) => {
            this.setState({
                cityName: cityName,
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
                return <h3>Loading. Please Wait.</h3>;
            } else if ( cityName && degree ){
                return <WeatherMessage hide={ifHide} cityName={cityName} degree={degree}/>;
            }
        }
        return (
            <div>
                <h1 className='text-center'>Search Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }

});

module.exports = Weather;
