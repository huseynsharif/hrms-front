import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Container, Input, Menu, Segment } from 'semantic-ui-react'
import EmployeeSignUp from './EmployeeSignUp'
import EmployerSignUp from './EmployerSignUp'

export default function SignUpHandler() {

    const [whichPage, setWhichPage] = useState("employee")
    

    useEffect(
        ()=>{

        }, [whichPage]
    )

    return (
        <div>
            <Container style={{ display: "flex", justifyContent: "center", marginTop:"20px"}}>
            <Menu tabular >
                <Menu.Item
                    name='Employee' active={whichPage==="employee"} onClick={()=>setWhichPage("employee")}
                />
                <Menu.Item
                    name='Employer' active={whichPage==="employer"} onClick={()=>setWhichPage("employer")}
                />
            </Menu>
        </Container> 
            
            {whichPage==="employee"?<EmployeeSignUp/>:<EmployerSignUp/>}
        </div>
    )
}
