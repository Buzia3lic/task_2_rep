import React, { useEffect, useState } from 'react';
import { storeDate } from "./storeDates"
import { Icon, Table, Loader, Segment } from 'semantic-ui-react'

const VacationTable = () => {

  useEffect(() => { fetchDates() }, [])

  const { loading, error, history, fetchDates } = storeDate((state) => ({
    loading: state.loading,
    error: state.error,
    history: state.history,
    fetchDates: state.fetchDates
  }));

  const arr = [];
  history.history?.map((history) => {
    arr.push(new Date(history.date));
  });

  const arr3 = arr.reduce(function (rv, item) {
    (rv[item.getFullYear()] = rv[item.getFullYear()] || []).push(item.toLocaleDateString());
    return rv
  }, {});

  //console.log(arr3);
  if (loading) return (
    <Segment color='red'>
      <Loader size='massive' active inline='centered' />
    </Segment>)
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
        Object.keys(arr3).reverse().map((key) => {
          var status = arr3[key].length < 8 ? true : false


          return (

            <Table.Row negative={status} positive={!status} textAlign='center'>
              <Table.Cell >{key}</Table.Cell>
              <Table.Cell>{arr3[key].length}</Table.Cell>
              <Table.Cell>

                {arr3[key].map((x) => (<p>{x}</p>))}

              </Table.Cell>
            </Table.Row>
          )
        })
      }



    </Table.Body>
  </Table>

}

export default VacationTable
