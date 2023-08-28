import React, { useEffect, useState } from 'react';
import { Segment, Divider, Loader } from 'semantic-ui-react'
import UserPageProgress from '../components/userPageProgress'
import VacationTable from '../components/vacationTable'
import List from '../components/List'
import withListLoading from '../components/withListLoading'

// const historyPage = () => (
//     <Segment secondary>
//         <UserPageProgress />
//         <Divider />
//         <VacationTable />
//     </Segment>


// )

// export default historyPage


const HistoryPage = () => {
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        fetch('http://localhost:3000/db')
            .then((res) => res.json())
            .then((history) => {
                console.log(history);
                setAppState({ loading: false, repos: history });
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [setAppState]);
    return (
        <div>
            <ListLoading isLoading={appState.loading} repos={appState.repos} />
            <Segment secondary>
                <UserPageProgress />
                <Divider />
                <VacationTable />
            </Segment>
        </div>
    );
}

export default HistoryPage















