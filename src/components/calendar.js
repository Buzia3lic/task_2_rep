import React, { useEffect, useState } from 'react';
import { Calendar } from "react-multi-date-picker";
import { storeDate } from "./storeDates"
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import {
  Icon,
  Grid,
  Segment,
  Button,
  Dimmer,
  Loader

} from "semantic-ui-react";


export default function CalendarButtons() {
  const [value, setValue] = useState();

  useEffect(() => { fetchDates() }, [])

  const { loading, error, history, fetchDates, arrFin } = storeDate((state) => ({
    loading: state.loading,
    error: state.error,
    history: state.history,
    fetchDates: state.fetchDates,
    arrFin: state.arrFin
  }));

  for (var key in arrFin) {
    var progressValue = new Date().getFullYear() == key ? arrFin[key].length : 0
  };
  var buttonDisable = progressValue < 8 ? false : true;

  function handleClick() {

    const postDate = []

    value?.map((el) => { postDate.push({ date: el.toString() }) })

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ postDate })
    };
    fetch('http://localhost:3001/history', requestOptions)
    alert('Данные отправлены!')
    console.log(postDate)


    // const postDate = {}
    // //  postDate.push({"data" : value.toString()})
    // postDate.data = value.toString()
    // console.log(value.toString())
    // console.log(postDate)


    // fetch('http://localhost:3001/history', {

    //   method: 'POST',
    //   mode: 'cors',
    //   body: JSON.stringify(postDate)

    // })


  }
  if (loading)
    return <Dimmer active inverted>
      <Loader size='massive' active inline='centered' />
    </Dimmer>
  else return <Grid >
      <Grid.Row >
        <Grid.Column >
          <Calendar
            multiple
            plugins={[<DatePanel />]}
            value={value}
            onChange={setValue}
            sort
            format="DD.MM.YYYY"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column >
          <Button.Group fluid>
            {/* <Button animated color='blue' onClick={() => { value?.map((el) => { console.log(el.toString()) })}}> */}

            <Button disabled={buttonDisable} animated color='blue' onClick={handleClick}>

              <Button.Content visible>Запросить</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>


            </Button>

            <Button animated color='red' onClick={() => { for (const key in value) { delete value[key] } }}>
              <Button.Content visible>Очистить</Button.Content>
              <Button.Content hidden>
                <Icon name='eraser' />
              </Button.Content>


            </Button>
          </Button.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>

  




}
