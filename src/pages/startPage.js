import React from 'react'
import { Link, Outlet } from "react-router-dom"
import { Button, Icon, Image, Segment, Divider, Tab } from 'semantic-ui-react'
import { Routes, Route } from "react-router-dom";
import MainTabs from '../components/mainTabs';

const panes = [
    {
        menuItem: {
            content:
                <Image
                    as='a' href='https://www.webmoney.ru/'
                    verticalAlign='bottom'
                    alt='Webmoney'
                    src='https://www.webmoney.ru/assets/images/wm-logo-white.svg?v2'
                />
        }
    },


    {
        menuItem: {
            key: "login",
            icon: "sign-in",
            content: "Вход",
            position: "right",
            onClick: handleClick
        }
    }
];

function handleClick() {

    // const postDate = []


    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ postDate })
    // };
    // fetch('http://localhost:3001/history', requestOptions)
    alert('Данные отправлены!')
    console.log('Данные отправлены!')
    


}

const StartPage = () => (



    <>
        <Tab
            menu={{
                icon: "labeled",
                color: "blue",
                inverted: true
            }}
            panes={panes}

        />


        {/* <Segment inverted color='blue' textAlign='center'>
            <Image src='https://www.webmoney.ru/assets/images/wm-logo-white.svg?v2' size='small' />
            <Button color='blue' size='huge' animated>
                <Button.Content visible>Вход</Button.Content>
                <Button.Content hidden>
                    <Icon name='sign-in' />
                </Button.Content>
            </Button>
        </Segment> */}

        <Divider />
        <Segment secondary textAlign='center'>
            <h2>Для доступа к ресурсам необходимо авторизоваться!</h2>
            {/* <Button color='green' size='huge' animated>
                <Button.Content visible>Вход</Button.Content>
                <Button.Content hidden>
                    <Icon name='sign-in' />
                </Button.Content>
            </Button> */}
        </Segment>
        <Divider />
        <Segment padded='very' inverted color="teal"><Image src='https://www.webmoney.ru/assets/images/wm-logo-white.svg?v2' size='medium' centered /></Segment>

        <MainTabs />
    </>

)

export default StartPage