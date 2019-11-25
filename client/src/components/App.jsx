import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClickTest = this.handleClickTest.bind(this);
  }

  handleClickTest() {

  }

  render() {
    return (
      <div>

        <div className="parent">
          <div className="shareAndSaveContainer">
            <div className="shareButton" onClick={this.handleClickTest}>
              <span className="share homeScreenButton" href="#"><FaBeer />  Share</span>
            </div>
            <div className="saveButton" onClick={this.handleClickTest}>
              <span className="save homeScreenButton" href="#"><FaHeart />  Save</span>
            </div>
          </div>

          <div className="viewPhotosButton" onClick={this.handleClickTest}>
            <span className="homeScreenButton">View Photos</span>
          </div>
        </div><br/><br/><br/>

        <div className="photoDescription">Photo Description is styled to look like this</div>
        <p> Comparison description, here.</p>

      </div>
    );
  }
}

export default App;
