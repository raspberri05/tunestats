import React from 'react'

class SmallButton extends React.Component {

  render() {
    return (
      <button className="btn btn-clr btn-md" onClick={() => this.props.link()} href="/#">{this.props.name}</button>
    )
  }
}

export default SmallButton;
