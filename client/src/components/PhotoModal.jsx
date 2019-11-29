import React from 'react';
import Photo from './Photo.jsx';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: 0,
    };
  }

  render() {

    return (
      <div>
        <div className="photoModuleParentContainer">
          <div className="photoModuleLeftContainer">
            <div className="photoModuleLeftArrowContainer">
              <div className="photoModuleLeftArrow">
                <span className="FaChevronLeft"> <FaChevronLeft /> </span>
              </div> {/*photoModuleLeftArrow*/}

            </div> {/*photoModuleLeftArrowContainer*/}

            <div className="photoModuleMainPhotoContainer">
              <div className="photoModuleMainPhoto">
                <Photo photoClass={'modalPhoto'} photoUrl={this.props.photoDetails[this.state.currentPhoto]}/>
              </div> {/*photoModuleMainPhoto*/}

            </div> {/*photoModuleMainPhotoContainer*/}

            <div className="photoModuleRightArrowContainer">
              <div className="photoModuleRightArrow">
                <span className="FaChevronRight"> <FaChevronRight /> </span>
              </div> {/*photoModuleRightArrow*/}

            </div> {/*photoModuleRightArrowContainer*/}

          </div> {/*photoModuleLeftContainer*/}

          <div className="photoModuleRightContainer">
            <div className="photoModuleExitButtonContainer">

              <div className="photoModuleExitButton" onClick={this.props.photoButtonClick}>
                <span className="FaTimes"> <FaTimes /> </span>
              </div> {/*photoModuleExitButton*/}

            </div> {/*photoModuleExitButtonContainer*/}

            <div className="photoModuleCarouselContainer">
              <div className="photoModuleCarousel">


              </div> {/*photoModuleCarousel*/}

            </div> {/*photoModuleCarouselContainer*/}

            <div className="photoModuleDescriptionContainer">
              <div className="photoModulePhotoNumber">

              </div> {/*photoModulePhotoNumber*/}

              <div className="photoModulePhotoDescription">

              </div> {/*photoModulePhotoDescription*/}

            </div> {/*photoModuleDescriptionContainer*/}

          </div> {/*photoModuleRightContainer*/}

        </div> {/*photoModuleParentContainer*/}

      </div> /*starting div*/
    )
  }
}

export default PhotoModal;
