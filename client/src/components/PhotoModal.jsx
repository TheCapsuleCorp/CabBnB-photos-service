import React from 'react';
import Photo from './Photo.jsx';
import PhotoModalCarousel from './PhotoModalCarousel.jsx';
import PhotoModalDescriptionContainer from './PhotoModalDescriptionContainer.jsx';
import { FaChevronRight, FaChevronLeft, FaTimes} from 'react-icons/fa';

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: 0,
    };
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
  }

  handleLeftArrowClick() {
    const { currentPhoto } = this.state;
    const { photoDetails } = this.props;
    const newCurrentPhoto =
      currentPhoto > 0 ? currentPhoto - 1 : photoDetails.length - 1;

    this.setState({
      currentPhoto: newCurrentPhoto,
    });
  }

  handleRightArrowClick() {
    const { currentPhoto } = this.state;
    const { photoDetails } = this.props;
    const newCurrentPhoto =
      currentPhoto < photoDetails.length - 1 ? currentPhoto + 1 : 0;

    this.setState({
      currentPhoto: newCurrentPhoto,
    });
  }

  render() {

    const { photoDetails } = this.props;
    const { currentPhoto } = this.state;
    const { viewPhotoButtonClick } = this.props;

    return (
      <div>
        <div className="photoModuleParentContainer">
          <div className="photoModuleLeftContainer">
            <div className="photoModuleLeftArrowContainer">
              <div className="photoModuleLeftArrow">
                <span className="FaChevronLeft" onClick={this.handleLeftArrowClick}> <FaChevronLeft /> </span>
              </div> {/*photoModuleLeftArrow*/}

            </div> {/*photoModuleLeftArrowContainer*/}

            <div className="photoModuleMainPhotoContainer">
              <div className="photoModuleMainPhoto">
                <Photo photoClass={'modalPhoto'} photoUrl={photoDetails[currentPhoto]}/>

              </div> {/*photoModuleMainPhoto*/}

            </div> {/*photoModuleMainPhotoContainer*/}

            <div className="photoModuleRightArrowContainer">
              <div className="photoModuleRightArrow">
                <span className="FaChevronRight" onClick={this.handleRightArrowClick}> <FaChevronRight /> </span>

              </div> {/*photoModuleRightArrow*/}

            </div> {/*photoModuleRightArrowContainer*/}

          </div> {/*photoModuleLeftContainer*/}

          <div className="photoModuleRightContainer">
            <div className="photoModuleExitButtonContainer">
              <div className="photoModuleExitButton" onClick={viewPhotoButtonClick}>
                <span className="FaTimes"> <FaTimes /> </span>
              </div> {/*photoModuleExitButton*/}

            </div> {/*photoModuleExitButtonContainer*/}

            <div className="photoModalCarouselContainer">
              <PhotoModalCarousel photos={photoDetails} currentPhoto={currentPhoto}/>

            </div> {/*photoModalCarouselContainer*/}

            <PhotoModalDescriptionContainer photos={photoDetails} currentPhoto={currentPhoto}/>

          </div> {/*photoModuleRightContainer*/}

        </div> {/*photoModuleParentContainer*/}

      </div> /*starting div*/
    )
  }
}

export default PhotoModal;
