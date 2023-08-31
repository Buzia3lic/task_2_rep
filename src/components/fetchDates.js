import React, { useEffect, useState } from 'react';
import List from "./List"
import withListLoading from "./withListLoading";
import { fetchDate } from "./storeDates"
import { Button, Segment } from "semantic-ui-react"

// const ListLoading = withListLoading(List);
// const FetchDates = () => {
//     const { loading, error, history, fetchDates } = fetchDate((state) => ({
//         loading: state.loading,
//         error: state.error,
//         history: state.history,
//         fetchDates: state.fetchDates
//     }))

//     return (<Segment>
//         {!error ? <ListLoading /> : {error}}

//         {/* <List /> */}

//     </Segment>)

// }
const FetchDates = () => {
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
            </div>
        );

}
export default FetchDates;
