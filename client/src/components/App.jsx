import React from 'react';
import $ from 'jquery';
import { FaBeer } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleShareButtonClick = this.handleShareButtonClick.bind(this);
    this.handleViewPhotosButtonClick = this.handleViewPhotosButtonClick.bind(this);
  }

  handleShareButtonClick() {

  }
  handleViewPhotosButtonClick() {

  }

  render() {
    return (
      <div>

        <div className="parent">
          <div className="shareAndSaveContainer">
            <div className="shareButton" onClick={this.handleShareButtonClick}>
              <span className="share homeScreenButton" href="#"><FaBeer />  Share</span>
            </div>
            <div className="saveButton">
              <span className="save homeScreenButton" href="#"><FaHeart />  Save</span>
            </div>
          </div>

          <div className="viewPhotosButton" onClick={this.handleViewPhotosButtonClick}>
            <span className="homeScreenButton">View Photos</span>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
