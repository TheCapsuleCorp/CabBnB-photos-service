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

          <div className="leftPhotoContainer">
            <span className="leftPhoto"></span>
          </div> {/*leftPhotoContainer*/}

          <div className="rightPhotosContainer">

            <div className="rightTopPhotoContainer">
              <div className="rightTopLeftPhoto">
              </div> {/*rightTopLeftPhoto*/}

              <div className="rightTopRightPhoto">
                <div className="shareAndSaveContainer">
                  <div className="saveButtonContainer">
                    <span className="save homeScreenButtons" href="#"><FaHeart />  Save</span>
                  </div> {/*saveButtonContainer*/}

                  <div className="shareButtonContainer" onClick={this.handleShareButtonClick}>
                    <span className="share homeScreenButtons" href="#"><FaBeer />  Share</span>
                  </div> {/*shareButtonContainer*/}

                </div> {/*shareAndSaveContainer*/}
              </div> {/*rightTopRightPhoto*/}

            </div> {/*RightTopPhotoContainer*/}

            <div className="rightBottomPhotoContainer">

              <div className="rightBottomLeftPhoto">
              </div> {/*rightBottomLeftPhoto*/}

              <div className="rightBottomRightPhoto">
                <div className="viewPhotosButtonContainer" onClick={this.handleViewPhotosButtonClick}>
                  <span className="view homeScreenButtons">View Photos</span>
                </div> {/*viewPhotosButtonContainer*/}

              </div> {/*rightBottomRightPhoto*/}

            </div> {/*RightBottomPhotoContainer*/}

          </div> {/*rightPhotoContainer*/}

        </div> {/*parent*/}

      </div> /*starting div*/
    );
  }
}

export default App;
