const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api/house', (req, res) => {
    house = [
        {
            id: 1, 
            name: 'House 1',
            imgsrc: 'https://react.semantic-ui.com/images/wireframe/image.png',
            houseType: 1, 
            address: '1234 Address Way',
            description: 'Some Description of the house',
            shared: true,
            pets: false, 
            price: 1500, 
            bed: 1, 
            bath: 1,
            toggle: true
        },
        {
            id: 2, 
            name: 'House 2', 
            imgsrc: 'https://react.semantic-ui.com/images/wireframe/image.png',
            houseType: 2,
            address: '1234 Address Way', 
            description: 'Some Description of the house', 
            shared: true,
            pets: false, 
            price: 3700, 
            bed: 2, 
            bath: 1,
            toggle: true
        },
        {
            id: 3, 
            name: 'House 3', 
            imgsrc: 'https://react.semantic-ui.com/images/wireframe/image.png',
            houseType: 1,
            address: '1234 Address Way', 
            description: 'Some Description of the house',
            shared: true,
            pets: false, 
            price: 2000, 
            bed: 2, 
            bath: 3,
            toggle: true
            
        },
        {
            id: 4, 
            name: 'House 4', 
            imgsrc: 'https://react.semantic-ui.com/images/wireframe/image.png',
            houseType: 1, 
            address: '1234 Address Way',
            description: 'Some Description of the house', 
            shared: true,
            pets: false, 
            price: 3750, 
            bed: 3, 
            bath: 2, 
            toggle: true
        },
        {
            id: 5, 
            name: 'House 5',  
            imgsrc: 'https://react.semantic-ui.com/images/wireframe/image.png',
            houseType: 2,
            address: '1234 Address Way',
            description: 'Some Description of the house', 
            shared: true,
            pets: false, 
            price: 2650, 
            bed: 2, 
            bath: 2, 
            toggle: true
        },
        {
            id: 6, 
            name: 'House 6',  
            imgsrc: 'https://react.semantic-ui.com/images/wireframe/image.png',
            houseType: 1,
            address: '1234 Address Way',
            description: 'Some Description of the house', 
            shared: true,
            pets: false, 
            price: 1900, 
            bed: 1, 
            bath: 1, 
            toggle: true
        },
        {
            id: 7, 
            name: 'House 7',  
            imgsrc: 'https://react.semantic-ui.com/images/wireframe/image.png',
            houseType: 2,
            address: '1234 Address Way',
            description: 'Some Description of the house', 
            shared: true,
            pets: false, 
            price: 3800, 
            bed: 3, 
            bath: 2, 
            toggle: true
        },
        {
            id: 8, 
            name: 'House 8',  
            imgsrc: 'https://react.semantic-ui.com/images/wireframe/image.png',
            houseType: 1,
            address: '1234 Address Way',
            description: 'Some Description of the house', 
            shared: true,
            pets: false, 
            price: 2500, 
            bed: 2,
            bath: 2, 
            toggle: true
        },
        {
            id: 9, 
            name: 'House 9',  
            imgsrc: 'https://react.semantic-ui.com/images/wireframe/image.png',
            houseType: 2,
            address: '1234 Address Way',
            description: 'Some Description of the house', 
            shared: true,
            pets: false, 
            price: 3950, 
            bed: 4, 
            bath: 3, 
            toggle: true
        },
    ] ;
    res.json(house);
})

app.listen(port, () => console.log(`Server started on ${port}`));