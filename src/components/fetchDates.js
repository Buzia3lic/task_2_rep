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





    // if (loading) return (
    //     <Segment>
    //         <Loader size='massive' active inline='centered' />
    //     </Segment>)
    // else return (!error ? <Segment><ul>
    //                  <h2>Available data</h2>

    //                  {history.history?.map((history, index) => {
    //                     return (
    //                         <li key={index}>
    //                             {index + 1}) {(new Date(history.data)).toLocaleDateString()}

    //                             {console.log(new Date(history.data).toLocaleDateString())}
    //                         </li>
    //                     );
    //                 })}

    //             </ul>
    //             </Segment> : <Segment>{error}{console.log(error)}</Segment>)


    const arr = [];
    history.history?.map((history) => {
        arr.push(new Date(history.date));
    });

    //console.info(arr);


    const arr3 = arr.reduce(function (rv, item) {
        (rv[item.getFullYear()] = rv[item.getFullYear()] || []).push(item.toLocaleDateString());
        return rv
    }, {});

    console.log(arr3);




    return Object.keys(arr3).map((key, index) => {
        return (
            <ul key = {index}>
                <li>
                   
                    <ul>
                        <b>Год:</b> {key} <br />
                        <b>Даты:</b> <i>{arr3[key].map((x) => (<li key={x}>{x}</li>))}</i>
                    </ul>
                </li>
            </ul>
        )
    })

    // return {
    //     for() { arr3[key].map((x) => (<li key={key}>{x}</li>)) }
    // }



    // if (loading) return (
    //         <Segment>
    //             <Loader size='massive' active inline='centered' />
    //         </Segment>)
    //     else return (!error ? <Segment><ul>
    //                      <h2>Available data</h2>

    //                      {arr3.map((history, index) => {
    //                         return (
    //                             <li key={index}>
    //                                 {index + 1}) {(new Date(history.data)).toLocaleDateString()}

    //                                 {console.log(new Date(history.data).toLocaleDateString())}
    //                             </li>
    //                         );
    //                     })}

    //                 </ul>
    //                 </Segment> : <Segment>{error}{console.log(error)}</Segment>)



}


export default FetchDates;
