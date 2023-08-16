import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import UserPageProgress from '../components/userPageProgress'
import VacationTable from '../components/vacationTable'

const historyPage = () => (
    <Segment secondary>

        <UserPageProgress />
        <Divider />
        <VacationTable />
    </Segment>

)

export default historyPage







