import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import Photo from './Photo.jsx';

const Content = (props) => (
  <div className="parent">
    <MobilePaginationDotsContainer photo={props.photos} />
    <Photo photoClass={'leftPhoto'} photo={props.photos[0]} />
    <Photo photoClass={'mobileMainPhoto'} photo={props.photos[0]} />
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
          <div className="shareButtonContainer" onClick={props.handleShareButtonClick}>
            <span className="share homeScreenButton"><FaBeer />  Share</span>
          </div>
        </div>
        <Photo photoClass={'rightTopRightPhoto'} photo={props.photos[2]} />
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

const MobilePaginationDotsContainer = (props) => {
  let dots = props.photo.map((photo, i) => {
    if (i < 7) {
      return <li key={i}> <div></div> </li>
    }
  })

  return (
    <React.Fragment>
      <ul className="mobilePaginationDotsContainer">
        {dots}
      </ul>
    </React.Fragment>
  );
}

export default Content;
