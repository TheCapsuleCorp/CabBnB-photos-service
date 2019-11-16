import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click');
  }

  render() {
    return (
      <div className="parent">
        <table>
          <tbody>
            <h1>hello world</h1>
          </tbody>
        </table>
        <button onClick={this.handleClick}>Reset Game</button>
      </div>
    );
  }
}

export default App;
