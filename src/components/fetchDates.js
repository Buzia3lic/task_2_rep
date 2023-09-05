import React, { useEffect, useState } from 'react';
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

    for (var el in history.history)
    {
        console.log(el)
    }



    if (loading) return (
        <Segment>
            <Loader size='massive' active inline='centered' />
        </Segment>)
    else return (!error ? <Segment><ul>
                     <h2>Available data</h2>
    
                     {history.history?.map((history, index) => {
                        return (
                            <li key={index}>
                                {index + 1}) {(new Date(history.data)).toLocaleDateString()}
                                
                                {console.log(new Date(history.data).toLocaleDateString())}
                            </li>
                        );
                    })}
    
                </ul>
                </Segment> : <Segment>{error}{console.log(error)}</Segment>)
                

 
               

}
 

export default FetchDates;
