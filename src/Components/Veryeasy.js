import React, {Component} from "react";

class Site extends React.Component{
  render(){
    return (
      <>
      <div>
      <h1>{this.props.name}</h1>
          <h1>{this.props.dateOfBirth}</h1>
          <h1>{this.props.number}</h1>
      </div>
      </>
    )
  }
}

export default Site;