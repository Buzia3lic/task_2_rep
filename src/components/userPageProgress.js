import React, { useEffect, useState } from 'react';
import { storeDate } from "./storeDates"

import {
    Segment, Progress, Label, Grid, Loader, Dimmer
} from "semantic-ui-react";


const UserPageProgress = () => {

    useEffect(() => { fetchDates() }, [])

    const { loading, error, history, fetchDates, arrFin} = storeDate((state) => ({
        loading: state.loading,
        error: state.error,
        history: state.history,
        fetchDates: state.fetchDates,
        arrFin: state.arrFin
    }));

    // const arr = [];
    // history.history?.map((history) => {
    //     arr.push(new Date(history.date));
    // });

    // const arr3 = arr.reduce(function (rv, item) {
    //     (rv[item.getFullYear()] = rv[item.getFullYear()] || []).push(item.toLocaleDateString());
    //     return rv
    // }, {});

    for (var key in arrFin) {
        var progressValue = new Date().getFullYear() == key ? arrFin[key].length : 0
    }
    switch (8 - progressValue) {
        case 0:
            var colorProc = 'black';
            break;
        case 1:
        case 2:
            var colorProc = 'red';
            break;
        case 3:
        case 4:
            var colorProc = 'orange';
            break;
        case 5:
        case 6:
            var colorProc = 'yellow';
            break;

        default:
            var colorProc = 'green';
            break;
    }


    if (loading) return (
        <Progress disabled size='large'>
            <Loader active inline='centered' />
        </Progress>
    )
    else return (<Progress value={8 - progressValue} total='8' progress='ratio' color={colorProc} size='large' label={'Отпускных смен в ' + new Date().getFullYear() + ' году осталось'} />)


}


export default UserPageProgress