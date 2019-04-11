import React, { Component } from 'react'
import { Grid, Header } from 'semantic-ui-react'
import CardTemplate from './Card'
import './CardList.css'

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            house: [], 
            houseClone: []
        }
    }
    handleItemClick = (e) => {
        //renderFiltered()
        console.log('item has been clicked')
    }
    componentDidMount() {
        fetch('/api/house')
            .then(res => res.json())
            .then(house => this.setState({house}, () => console.log('names fetched..', house)));
    }
    renderFiltered = () => { 
        /*
            houseClone = house
            check Filter value
            if statements to change state of houseClone
            delete items
        */
    }
    render() {
        return (
            <div>
                <div className='cardBox'> 
                    
                    <Header inverted> Listings</Header>
                    <br />
                    {
                    !this.props.isHidden  && 
                        <Grid centered stackable columns={3}>
                            { this.state.house.map((house) => (
                                <Grid.Column centered width={5} key={house.id}>
                                    <CardTemplate house={house}/>
                                </Grid.Column>
                            )) }
                        </Grid>
                    }
                </div>
            </div>
        );
    }
}

export default CardList