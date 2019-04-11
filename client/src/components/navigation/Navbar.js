import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, Container, Header, Icon, Menu, Responsive, Segment, Sidebar, Visibility } from 'semantic-ui-react'
import Login from '../login/Login'
import Signup from '../login/Signup'

/*************************************************************************
 * 
 * NOTE: This NavBar.js File is RESPONSIVE: so it works with both 
 *       MOBILE and DESKTOP and changes based on which screen it is on!
 * 
 * Note 2: please be aware of inline styling
 * 
 *************************************************************************/

 const getWidth = () => {
  const isSSR = typeof window === 'undefined'
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Discover Housing'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Continue with Ease'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name, href }) => {
    this.setState({ activeItem: name })
    console.log(href)
  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { activeItem, fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            style={{ backgroundColor: '#292F33', minHeight: '90vh', padding: '0em 0em 0em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted
              style={{ backgroundColor: '#292F33'}}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item name='ZEPHYR' href='' />
                <Menu.Item 
                    id='menu'
                    name='home' 
                    href=''
                    active={activeItem === 'home'} 
                    onClick={this.handleItemClick}
                />
                <Menu.Item 
                    id='menu'
                    name='about us'
                    href='#'
                    active={activeItem === 'about us'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item 
                    id='menu'
                    name='links'
                    href='#'
                    active={activeItem === 'links'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    <Login />
                  </Button>
                  <Button as='a' inverted={!fixed} secondary={fixed} style={{ marginLeft: '0.5em' }}>
                    <Signup />
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          style={{ backgroundColor: '#292F33'}}
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Item as='a'><Login /></Menu.Item>
          <Menu.Item as='a'><Signup /></Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ backgroundColor: '#292F33', minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    <Login />
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    <Signup />
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const Navbar = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

Navbar.propTypes = {
  children: PropTypes.node,
}

export default Navbar
