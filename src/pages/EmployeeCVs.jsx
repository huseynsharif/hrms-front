import React, { useEffect, useState } from 'react'
import { Container, Header, Image, Table } from 'semantic-ui-react'
import { EmployeeCVService } from '../services/EmployeeCVService'
import { EmployeeCvPhotoService } from '../services/EmployeeCvPhotoService'

export default function EmployeeCVs() {

    const [employeeCvs, setEmployeeCvs] = useState([])
    const [employeeCvPhotos, setemployeeCvPhotos] = useState([])
    
    let employeeCvPhotoService = new EmployeeCvPhotoService()
    useEffect(() => {

        let employeeCVService = new EmployeeCVService()
        employeeCvPhotoService.getPhotos().then(result => setemployeeCvPhotos(result.data.data))
        employeeCVService.getEmployeeCVs().then(result => setEmployeeCvs(result.data.data))
        
    }, [])

    return (

        <div className='employeCv' style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>

            <Table celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Employee</Table.HeaderCell>
                        <Table.HeaderCell>Programming Language</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>{

                    employeeCvs.map((employeeCv) => {
                        let photo = employeeCvPhotos.find(employeeCvPhoto => employeeCvPhoto.id === employeeCv.employeeCvPhotoId).photoUrl
                        return (
                        <Table.Row>
                            
                            <Table.Cell>
                                <Header as='h4' image>
                                
                                    <Image src={photo} rounded size='mini' />
                                    <Header.Content>
                                        {employeeCv.description}
                                        <Header.Subheader>{employeeCv.experience.job.title}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>{employeeCv.programmingLanguage.languageName}</Table.Cell>
                        </Table.Row>)
})
                }
                </Table.Body>
            </Table>
        </div>
    )
}
