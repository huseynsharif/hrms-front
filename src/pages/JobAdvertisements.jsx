import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import { JobAdvertisementService } from '../services/jobAdvertisementService'



export default function JobAdvertisements() {

    const [jobAdvertisements, setJobAdvertisement] = useState([])

    useEffect(() => {
        let jobadvertisementService = new JobAdvertisementService()
        jobadvertisementService.getJobAdvertisements().then(result => setJobAdvertisement(result.data.data))
    }
        , [])

    return (
        <div className='jobAdvertisements'>


            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Employer</Table.HeaderCell>
                        <Table.HeaderCell>Job</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Open Positions</Table.HeaderCell>
                        <Table.HeaderCell>Deadline</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>{
                    jobAdvertisements.map((jobadvertisement) => (
                        <Table.Row key={jobadvertisement.id}>
                            <Table.Cell>{jobadvertisement.employer.companyName}</Table.Cell>
                            <Table.Cell>{jobadvertisement.job.title}</Table.Cell>
                            <Table.Cell>{jobadvertisement.city.cityName}</Table.Cell>
                            <Table.Cell>{jobadvertisement.openPositions}</Table.Cell>
                            <Table.Cell>{jobadvertisement.deadline}</Table.Cell>
                            <Table.Cell>{jobadvertisement.description}</Table.Cell>
                        </Table.Row>

                    ))}

                </Table.Body>
            </Table>

        </div>
    )
}
