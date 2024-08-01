import React from 'react';
import Search from 'antd/es/input/Search';
import { Button } from 'antd';
import { getWeatherByCoordinates } from '../axios/weatherServices/weatherServices';

const Home: React.FC = () => {

    const handleGetCoordinatesResponse = ()=> {
        // This is simply a test, of course the submit button will be on the search and the getCoordinatesResponse will be called on clicking a card
        // so that we can see the weather;
        getWeatherByCoordinates(42, 23);
    }

    // TODO: filter cities based on search query

    // Mock data for cities
    const cities = [
        { id: 1, name: 'New York' },
        { id: 2, name: 'London' },
        { id: 3, name: 'Tokyo' },
    ];

    return (
        <div>
            <Search placeholder="input search text" enterButton="Search" size="large" loading />
            <Button onClick={handleGetCoordinatesResponse} type="primary">Primary Button</Button>
            <div>
                {/* TODO: This should result in the cities found as a mapped list of CityCards */}
            </div>
        </div>
    );
};

export default Home;