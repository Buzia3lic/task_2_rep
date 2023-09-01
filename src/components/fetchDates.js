import React, { useEffect, useState } from 'react';
import List from "./List"
import withListLoading from "./withListLoading";
import { storeDate } from "./storeDates"
import { Button, Segment, Loader } from "semantic-ui-react"

const FetchDates = () => {
    useEffect(() => { fetchDates() }, [])

    const { loading, error, history, fetchDates } = storeDate((state) => ({
        loading: state.loading,
        error: state.error,
        history: state.history,
        fetchDates: state.fetchDates
    }))






    // if (loading) {return (
    //     <Segment>
    //         <Loader size='massive' active inline='centered' />
    //     </Segment>)}
    // else {if (loading.length != 0)
        
    //     <Segment>
    //         <ul>
    //             <h2>Available data</h2>

    //             {history.history.map((history, index) => {
    //                 return (
    //                     <li key={index}>
    //                         {history.data}
    //                     </li>
    //                 );
    //             })}

    //         </ul>{console.log(history)}</Segment>
    // }






    if (loading) return (
        <Segment>
            <Loader size='massive' active inline='centered' />
        </Segment>)
    else return (!error ? <Segment><ul>
                     <h2>Available data</h2>
    
                     {history.history?.map((history, index) => {
                        return (
                            <li key={index}>
                                {history.data}
                            </li>
                        );
                    })}
    
                </ul>{console.log(history)}</Segment> : <Segment>{error}{console.log(error)}</Segment>)

}

export default FetchDates;

// const FetchDates = () => {
// const ListLoading = withListLoading(List);
// const [appState, setAppState] = useState({
//     loading: false,
//     repos: null,
// });

// useEffect(() => {
//     setAppState({ loading: true });
//     fetch('http://localhost:3000/db')
//         .then((res) => res.json())
//         .then((history) => {
//             console.log(history);
//             setAppState({ loading: false, repos: history });
//         })
//         .catch((err) => {
//             console.log(err.message);
//         });
// }, [setAppState]);

// return (
//             <div>
//                 <ListLoading isLoading={appState.loading} repos={appState.repos} />
//             </div>
//         );

// }
// export default FetchDates;
