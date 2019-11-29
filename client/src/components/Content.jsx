import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import Photo from './Photo.jsx';

const Content = (props) => {
  return (
    <div className="parent">
      <Photo photoClass={'leftPhoto'} photoUrl={props.photos[0]} />
      <div className="rightPhotosContainer">
        <div className="rightTopPhotoContainer">
          <Photo photoClass={'rightTopLeftPhoto'} photoUrl={props.photos[1]} />
          <Photo photoClass={'rightTopRightPhoto'} photoUrl={props.photos[2]}>
            <div className="shareAndSaveContainer">
              <div className="saveButtonContainer">
                <span className="save homeScreenButtons"><FaHeart />  Save</span>
              </div> {/*saveButtonContainer*/}

              <div className="shareButtonContainer" onClick={props.handleShareButtonClick}>
                <span className="share homeScreenButtons"><FaBeer />  Share</span>
              </div> {/*shareButtonContainer*/}

            </div> {/*shareAndSaveContainer*/}

          </Photo> {/*rightTopRightPhoto*/}

        </div> {/*RightTopPhotoContainer*/}

        <div className="rightBottomPhotoContainer">
          <Photo photoClass={'rightBottomLeftPhoto'} photoUrl={props.photos[3]} />
          <Photo photoClass={'rightBottomRightPhoto'} photoUrl={props.photos[4]}>
            <div className="viewPhotosButtonContainer" onClick={props.viewPhotosButton}>
              <span className="view homeScreenButtons">View Photos</span>
            </div> {/*viewPhotosButtonContainer*/}

          </Photo> {/*rightBottomRightPhoto*/}

        </div> {/*rightBottomPhotoContainer*/}

      </div> {/*rightPhotosContainer*/}

    </div> /*parent*/
  );
};

export default Content;
