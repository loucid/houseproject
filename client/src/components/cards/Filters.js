import React, { Component } from 'react'
import { Button, Dropdown, Menu, Search, Sidebar, Header } from 'semantic-ui-react'
import _ from 'lodash'
import './Filter.css'

const source = _.times(5, () => ({
}))

export default class Filters extends Component {
    state = { visible: false, value: null}

    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
    handleSidebarHide = () => this.setState({ visible: false })
    
    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
        if (this.state.value.length < 1) return this.resetComponent()

        const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
        const isMatch = result => re.test(result.title)

        this.setState({
            isLoading: false,
            results: _.filter(source, isMatch),
        })
        }, 300)
    }
    onHandleClick =(e)=> {
        this.setState({value: this.value})
        console.log(this.value)
    }
    render() {
        const { children } = this.props
        const { visible, isLoading, value, results } = this.state

        return (
        <div>
            <Button.Group>
                <Button icon='sliders horizontal' disabled={visible} onClick={this.handleShowClick} />
                <Button icon='sliders horizontal' disabled={!visible} onClick={this.handleHideClick} /> 
            </Button.Group>

            <Sidebar.Pushable>
            <Sidebar
                as={Menu}
                animation='slide'
                onHide={this.handleSidebarHide}
                vertical
                visible={visible}
                width='wide'
                id='themed'
            >
                <Menu.Item as={Header}>Filters</Menu.Item>
                <Dropdown fluid inverted selection text='Bedrooms'>
                    <Dropdown.Menu>
                        <Dropdown.Item value='1' onClick={this.onHandleClick}>1 Bedroom</Dropdown.Item>
                        <Dropdown.Item>2 Bedrooms</Dropdown.Item>
                        <Dropdown.Item>3 Bedrooms</Dropdown.Item>
                        <Dropdown.Item>More than 3 Bedrooms</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown fluid selection text='Bathrooms' >
                    <Dropdown.Menu >
                        <Dropdown.Item value='11bed1bath' onClick={this.handleItemClick}>1 Bathroom</Dropdown.Item>
                        <Dropdown.Item>2 Bathrooms</Dropdown.Item>
                        <Dropdown.Item>3 Bathrooms</Dropdown.Item>
                        <Dropdown.Item>More than 3 Bathrooms</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown fluid selection text='Max Rent' >
                    <Dropdown.Menu >
                    <Dropdown.Item>$1500</Dropdown.Item>
                    <Dropdown.Item>$2000</Dropdown.Item>
                    <Dropdown.Item>$2500</Dropdown.Item>
                    <Dropdown.Item>$3000</Dropdown.Item>
                    <Dropdown.Item>$3500</Dropdown.Item>
                    <Dropdown.Item>$4000+</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown fluid search selection text='House Type' >
                    <Dropdown.Menu >
                    <Dropdown.Item>House</Dropdown.Item>
                    <Dropdown.Item>Apartment</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown fluid search selection text='Shared' >
                    <Dropdown.Menu >
                    <Dropdown.Item>Yes</Dropdown.Item>
                    <Dropdown.Item>No</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item position='right'>
                    <Search
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                        results={results}
                        value={value}
                        placeholder='search'
                        {...this.props}
                    />
                </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={visible}>
                { children }
            </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
        )
    }
}