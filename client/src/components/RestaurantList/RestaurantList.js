// RestaurantList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import './RestaurantList.css'; // Import the CSS file

// Make sure this URL matches your server endpoint
const apiUrl = 'http://localhost:8000/restaurants';

// Axios request
axios.get(apiUrl)
  .then(response => {
    // Handle the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching restaurants:', error);
  });

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        // Fetch restaurant data from your API
        axios.get('http://localhost:8000/restaurants')
            .then(response => {
                setRestaurants(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="card-container">
            {restaurants.map(restaurant => (
                <Card key={restaurant.id} className="card" variant="outlined">
                    <CardContent className="card-content">
                        <Typography variant="h5" component="div">
                            {restaurant.name}
                        </Typography>
                        <Typography color="text.secondary">
                            {restaurant.description}
                        </Typography>
                    </CardContent>
                    <CardActions className="card-actions">
                        <Button className="button" href={`/reserve?restaurantId=${restaurant.id}`}>
                            Reserve a Table
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};

export default RestaurantList;
