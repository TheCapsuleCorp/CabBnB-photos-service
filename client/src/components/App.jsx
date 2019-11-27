import React from 'react';
import $ from 'jquery';
import { FaBeer } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

import Photo from './Photo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photosDetails: [],
    };
    this.handleShareButtonClick = this.handleShareButtonClick.bind(this);
    this.handleViewPhotosButtonClick = this.handleViewPhotosButtonClick.bind(this);
  }

  handleShareButtonClick() {

  }
  handleViewPhotosButtonClick() {

  }

  componentDidMount() {
    console.log('component mounted');
    $.ajax({
      url: `api/rooms/${this.props.roomId}`,
      method: 'GET',
      success: (photosDetails) => {
        this.setState({
          photosDetails: photosDetails
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  render() {

    return (
      <div>
        <div className="parent">
          <Photo photoClass={'leftPhoto'} photoUrl={this.state.photosDetails[0]} />
          <div className="rightPhotosContainer">
            <div className="rightTopPhotoContainer">
              <Photo photoClass={'rightTopLeftPhoto'} photoUrl={this.state.photosDetails[1]} />
              <Photo photoClass={'rightTopRightPhoto'} photoUrl={this.state.photosDetails[2]}>
                <div className="shareAndSaveContainer">
                  <div className="saveButtonContainer">
                    <span className="save homeScreenButtons" href="#"><FaHeart />  Save</span>
                  </div> {/*saveButtonContainer*/}

                  <div className="shareButtonContainer" onClick={this.handleShareButtonClick}>
                    <span className="share homeScreenButtons" href="#"><FaBeer />  Share</span>
                  </div> {/*shareButtonContainer*/}

                </div> {/*shareAndSaveContainer*/}

              </Photo> {/*rightTopRightPhoto*/}

            </div> {/*RightTopPhotoContainer*/}

            <div className="rightBottomPhotoContainer">
              <Photo photoClass={'rightBottomLeftPhoto'} photoUrl={this.state.photosDetails[3]} />
              <Photo photoClass={'rightBottomRightPhoto'} photoUrl={this.state.photosDetails[4]}>
                <div className="viewPhotosButtonContainer" onClick={this.handleViewPhotosButtonClick}>
                  <span className="view homeScreenButtons">View Photos</span>
                </div> {/*viewPhotosButtonContainer*/}

              </Photo> {/*rightBottomRightPhoto*/}

            </div> {/*rightBottomPhotoContainer*/}

          </div> {/*rightPhotosContainer*/}

        </div> {/*parent*/}

      </div> /*starting div*/
    );
  }
}

export default App;
