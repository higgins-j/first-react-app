import React from 'react';

const hStyle = {
  textAlign: 'center'
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'ChoreBoard'
    };
  }

  render() {
    return (
      <h1 className="Header-title" style={hStyle}>
        {this.state.title}
      </h1>
    )
  }
}

export default Header;
