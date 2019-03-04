import React from 'react';
import Header from './Header';
import Topbar from './Topbar';
import ChoreScreen from './chorescreen/ChoreScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Blake'
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Topbar username={this.state.username} />
        <ChoreScreen />
      </div>
    )
  }
}



export default App;
