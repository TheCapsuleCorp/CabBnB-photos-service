import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import Photo from './Photo.jsx';

const Content = (props) => (
  <div className="parent">
    <Photo photoClass={'leftPhoto desktopPhotoBorderAndPosition'} photoUrl={props.photos[0]} />
    <div className="rightPhotosContainer">
      <div className="rightTopPhotoContainer">
        <Photo photoClass={'rightTopLeftPhoto desktopPhotoBorderAndPosition'} photoUrl={props.photos[1]} />
        <Photo photoClass={'rightTopRightPhoto desktopPhotoBorderAndPosition'} photoUrl={props.photos[2]}>
          <div className="shareAndSaveContainer">
            <div className="saveButtonContainer">
              <span className="save homeScreenButton"><FaHeart />  Save</span>
            </div>

            <div className="shareButtonContainer" onClick={props.handleShareButtonClick}>
              <span className="share homeScreenButton"><FaBeer />  Share</span>
            </div>

          </div>

        </Photo>

      </div>

      <div className="rightBottomPhotoContainer">
        <Photo photoClass={'rightBottomLeftPhoto desktopPhotoBorderAndPosition'} photoUrl={props.photos[3]} />
        <Photo photoClass={'rightBottomRightPhoto desktopPhotoBorderAndPosition'} photoUrl={props.photos[4]}>
          <div className="viewPhotosButtonContainer" onClick={props.handleViewPhotosButtonClick}>
            <span className="view homeScreenButton">View Photos</span>
          </div>

        </Photo>

      </div>

    </div>

  </div>
);

export default Content;
