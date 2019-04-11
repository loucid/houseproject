import React from 'react'
import { Button, Divider, Header, Modal, Segment } from 'semantic-ui-react'
import Signup from './Signup';
import LogEnhancedForm from './loginForm';
import './modal.css'

const Login = () => (
    <Modal size='tiny' trigger={<p>Login</p>} closeIcon className='modal'>
        <Modal.Content style={{backgroundColor: '#292F33'}}>
            <Modal.Description>
                <Header inverted>Login</Header>
                <LogEnhancedForm />
                <Divider horizontal content='OR' />
                <Segment id='modal' textAlign='center'>
                    <Button content={<Signup />}/>
                </Segment>
                
            </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default Login