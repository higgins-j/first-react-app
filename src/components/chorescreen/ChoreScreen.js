import React from 'react';
import Collapsible from 'react-collapsible';
import DailyChores from './DailyChores'

class ChoreScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <DailyChores />

      </div>
    )
  }
}

export default ChoreScreen;
