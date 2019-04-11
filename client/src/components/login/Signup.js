import React from 'react'
import { Button, Divider, Header, Modal, Segment } from 'semantic-ui-react'
import SignEnhancedForm from './signupForm'
import Login from './Login'
import './modal.css'

const SignUp = () => (
    <Modal size='tiny' trigger={<p>Sign Up</p>} closeIcon className='modal'>
        <Modal.Content style={{backgroundColor: '#292F33'}}>
            <Modal.Description>
                <Header inverted >Sign Up</Header>
                <SignEnhancedForm />
                <Divider horizontal content='Already have an Account?' />
                <Segment id='modal' textAlign='center'>
                    <Button content={<Login />}/>
                </Segment>
            </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default SignUp