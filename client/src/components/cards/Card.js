import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class CardTemplate extends Component {
    render(){
        const { name, imgsrc, description, price, bed, bath, address } = this.props.house;
        return (
        <Card>
            <Card.Content header={name} />
            <Image src={imgsrc} />
            <Card.Content description={description} />
            <Card.Content extra>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <Icon name='usd' /> ${price}
                    </li>
                    <li>
                        <Icon name='bed' />  {bed}  
                    </li>
                    <li>
                        <Icon name='bath' /> {bath}
                    </li>
                </ul>
            </Card.Content>
            <Card.Content meta={address} />
        </Card>
        )
    }
}

CardTemplate.propTypes = {
  house: PropTypes.object.isRequired
}
export default CardTemplate