import { Component } from "react";
import Card from "./Card";
import { faker } from '@faker-js/faker';

export default class Cards extends Component {
  render() {
    return (
      <div>
        <Card
          image={faker.image.avatar()}
          name={faker.name.firstName()}
          description={faker.lorem.sentences(10)}
        />
        <Card />
      </div>
    );
  }
}
