import React, { useEffect, useState } from 'react';
import { storeDate } from "./storeDates"
import { Icon, Table, Loader, Segment, Dimmer } from 'semantic-ui-react'

const VacationTable = () => {

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
  //   arr.push(new Date(history.date));
  // });

  // //console.error(arr);

  // arr.sort(function (a, b) {
  //   return a - b;
  // });

  // //console.info(arr);



  // const arr3 = arr.reduce(function (rv, item) {
  //   (rv[item.getFullYear()] = rv[item.getFullYear()] || []).push(item.toLocaleDateString());
  //   return rv
  // }, {});

  //console.log(arr3);

  if (loading) return (
    // <Segment tertiary>
    //   <Loader size='massive' active inline='centered' />
    // </Segment>)

    <Dimmer active inverted>
      <Loader size='massive' active inline='centered' />
    </Dimmer>)

  else return <Table singleLine color='green'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign='center'>Год</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Отгулено смен</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Даты</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>

      {
        Object.keys(arrFin).reverse().map((key) => {
          var status = arrFin[key].length < 8 ? true : false


          return (

            <Table.Row negative={status} positive={!status} textAlign='center'>
              <Table.Cell >{key}</Table.Cell>
              <Table.Cell>{arrFin[key].length}</Table.Cell>
              <Table.Cell>

                {arrFin[key].map((x) => (<p>{x}</p>))}

              </Table.Cell>
            </Table.Row>
          )
        })
      }



    </Table.Body>
  </Table>

}

export default VacationTable
