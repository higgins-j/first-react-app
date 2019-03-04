import React from 'react';

class Topbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h2 className="Topbar-welcome>">
          Welcome, {this.props.username}!
        </h2>
        <h3 className="Topbar-todayschores">
          Today's Chores:
        </h3>
        {/*Progress bar 1*/}
        <h3 className="Topbar-weeklychores">
          Weekly Chores:
        </h3>
        {/*Progress bar 2*/}
      </div>
    )
  }
}

export default Topbar;
