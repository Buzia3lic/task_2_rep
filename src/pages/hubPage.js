import React, { useEffect, useState } from 'react';
import { Segment, List, Icon, Image } from 'semantic-ui-react'


const HubPage = () => (

    <Segment secondary>

        
        {/* <Image src='https://www.wmtransfer.com.br/img/icons/wmlogo_vector_blue.png?1697531493' disabled fluid /> */}

        <List animated relaxed size='large'>
            <List.Item as='a' href='https://w4s.webmoney.ru/fvisor/RegHist.asp?&M=0.8916882527343937&SN=Server9&M=0.8283951973441925&SN=Server9'>
                <Icon name='server' />
                <List.Content>
                    <List.Header>Админка</List.Header>
                    <List.Description>
                        Основная админка для работы
                    </List.Description>
                </List.Content>
            </List.Item>

            <List.Item as='a' href='https://sms.webmoney.ru/SMSCVisor/'>
                <Icon name='envelope square' />
                <List.Content>
                    <List.Header>СМС-админка</List.Header>
                    <List.Description>
                        Админка для переотправки СМС и проверки статуса СМС-центра.
                    </List.Description>
                </List.Content>
            </List.Item>

            <List.Item as='a' href='https://postbox.com4s.com/ticket/15871859'>
                <Icon name='comments' />
                <List.Content>
                    <List.Header>Актуальный Postbox</List.Header>
                    <List.Description>
                        Postbox, который сделал Лебедев. Используется нас данный момент.
                    </List.Description>
                </List.Content>
            </List.Item>

            <List.Item as='a' href='https://postbox.molot.ru/aspx/index.asp?sessionid=9F416F7216FC423897DE1451F6AFF76C'>
                <Icon name='comments outline' />
                <List.Content>
                    <List.Header>Старый Postbox</List.Header>
                    <List.Description>
                        Postbox, который сделал Шпанов.
                    </List.Description>
                </List.Content>
            </List.Item>

            <List.Item as='a' href='https://172.16.1.151/zabbix.php?action=dashboard.view'>
                <Icon name='desktop' />
                <List.Content>
                    <List.Header>Zabbix</List.Header>
                    <List.Description>
                        Мониторинг серверов.
                    </List.Description>
                </List.Content>
            </List.Item>

            <List.Item as='a' href='http://paymaster.ru/utility/health/details'>
                <Icon name='ruble sign' />
                <List.Content>
                    <List.Header>Paymaster</List.Header>
                    <List.Description>
                        Мониторинг Site и PS.
                    </List.Description>
                </List.Content>
            </List.Item>




        </List>

    </Segment>

)

export default HubPage