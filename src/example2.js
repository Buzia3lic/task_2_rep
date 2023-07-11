import React, { Component } from "react";
import {
  Button,
  Link,
  Input,
  Menu,
  Segment,
  Icon,
  Container,
  Card,
  Image
} from "semantic-ui-react";
import Example from "./calendar";

export default class MenuExamplePointing extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing color={"blue"} inverted icon="labeled">
          <Menu.Item as="a" href="./calendar">
            To homepage
          </Menu.Item>

          <Menu.Item
            name="user"
            active={activeItem === "user"}
            onClick={this.handleItemClick}
          >
            <Icon name="users" />
            Сотрудник
          </Menu.Item>

          <Menu.Item
            name="history"
            active={activeItem === "history"}
            onClick={this.handleItemClick}
          >
            <Icon name="history" />
            История
          </Menu.Item>

          <Menu.Item
            position="right"
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          >
            <Icon name="logout" />
            Выход
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
