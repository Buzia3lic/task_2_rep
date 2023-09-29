import React, { useEffect, useState } from 'react';
import { storeDate } from "./storeDates"
import { Icon, Table } from 'semantic-ui-react'

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

  return <Table singleLine  color='green'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign='center'>Год</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Отгулено смен</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Даты</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>

      {
        Object.keys(arr3).reverse().map((key, index) => {
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

  // <Table singleLine color='green'>
  //   <Table.Header>
  //     <Table.Row>
  //       <Table.HeaderCell textAlign='center'>Год</Table.HeaderCell>
  //       <Table.HeaderCell textAlign='center'>Отгулено смен</Table.HeaderCell>
  //       <Table.HeaderCell textAlign='center'>Даты</Table.HeaderCell>
  //     </Table.Row>
  //   </Table.Header>

  //   <Table.Body>
  //     <Table.Row negative textAlign='center'>
  //       <Table.Cell >2023</Table.Cell>
  //       <Table.Cell>2</Table.Cell>
  //       <Table.Cell>
  //         01.01.2023<br/>
  //         04.01.2023<br/>
  //       </Table.Cell>
  //     </Table.Row>
  //     <Table.Row positive textAlign='center'>
  //       <Table.Cell>2022</Table.Cell>
  //       <Table.Cell positive>8</Table.Cell>
  //       <Table.Cell>
  //         01.01.2022<br/>
  //         04.01.2022<br/>
  //         08.01.2022<br/>
  //         12.01.2022<br/>
  //         16.01.2022<br/>
  //         20.01.2022<br/>
  //         24.01.2022<br/>
  //         28.01.2022<br/>
  //       </Table.Cell>
  //     </Table.Row>
  //     <Table.Row positive textAlign='center'>
  //       <Table.Cell>2021</Table.Cell>
  //       <Table.Cell>8</Table.Cell>
  //       <Table.Cell>
  //         01.01.2021<br/>
  //         04.01.2021<br/>
  //         08.01.2021<br/>
  //         12.01.2021<br/>
  //         16.01.2021<br/>
  //         20.01.2021<br/>
  //         24.01.2021<br/>
  //         28.01.2021<br/>
  //       </Table.Cell>
  //     </Table.Row>

  //   </Table.Body>
  // </Table>
}

export default VacationTable
