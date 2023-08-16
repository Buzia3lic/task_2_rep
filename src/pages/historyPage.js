import React from 'react'
import { Segment, Divider, Button } from 'semantic-ui-react'
import UserPageProgress from '../components/userPageProgress'
import VacationTable from '../components/vacationTable'

const historyPage = () => (
    <Segment secondary>
        <Button circular>Запросить</Button>
        <UserPageProgress />
        <Divider />
        <VacationTable />
    </Segment>

)

export default historyPage







