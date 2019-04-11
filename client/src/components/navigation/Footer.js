import React, { Component } from 'react'
import { Container, Divider, Grid, Header, List, Segment, } from 'semantic-ui-react'

class Footer extends Component {
    render() {
        return (
            <Segment inverted vertical style={{ padding: '5em 0em', backgroundColor: '#292F33' }}>
                <Container textAlign='center'>
                    <Grid divided stackable>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Group 1' />
                        <List inverted link>
                        <List.Item as='a'>Link One</List.Item>
                        <List.Item as='a'>Link Two</List.Item>
                        <List.Item as='a'>Link Three</List.Item>
                        <List.Item as='a'>Link Four</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Group 2' />
                        <List inverted link>
                        <List.Item as='a'>Link One</List.Item>
                        <List.Item as='a'>Link Two</List.Item>
                        <List.Item as='a'>Link Three</List.Item>
                        <List.Item as='a'>Link Four</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Group 3' />
                        <List inverted link>
                        <List.Item as='a'>Link One</List.Item>
                        <List.Item as='a'>Link Two</List.Item>
                        <List.Item as='a'>Link Three</List.Item>
                        <List.Item as='a'>Link Four</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header inverted as='h4' content='Footer Header' />
                        <p>
                            Extra space for a call to action inside the footer that could help re-engage users.
                        </p>
                    </Grid.Column>
                    </Grid>

                    <Divider section />
                    <List inverted horizontal divided link size='small'>
                    <List.Item as='a' href='#'>
                        Site Map
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Contact Us
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Terms and Conditions
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Privacy Policy
                    </List.Item>
                    </List>
                </Container>
            </Segment>
        )
    }
}

export default Footer