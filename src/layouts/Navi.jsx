import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Dropdown, Menu } from 'semantic-ui-react'


export default function Navi() {
    return (
        <div>

            <Menu size='large'>
                <Link to="/"><Menu.Item
                    name='home'

                /></Link>
                <Link to="/jobadvertisements"><Menu.Item
                    name='Job Advertisement'

                /></Link>
                <Link to="/employeecvs"><Menu.Item
                    name='Employe CV'

                />  </Link>

                <Menu.Menu position='right'>
                    <Dropdown item text='Language'>
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item>
                        <Link to="/signup">
                        <Button primary>Sign Up</Button>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                    <Link to="/login">
                        <Button>Log in</Button>
                        </Link>

                    </Menu.Item>
                </Menu.Menu>
            </Menu>

        </div>
    )
}
