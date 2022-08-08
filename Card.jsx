import { Component } from "react"

export default class Card extends Component {

    render() {

        let {image, name, description} = this.props;

      return (
        <div className="card">
            <div className="content">
                <img src= {image} alt="" srcSet=""/>
                <div>{name}</div>
                <div>{description}</div>
            </div>
        
        </div>
      )
    }
  }
  