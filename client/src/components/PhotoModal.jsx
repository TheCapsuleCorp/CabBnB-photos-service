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
    const { photos } = this.props;
    const newCurrentPhoto =
      currentPhoto > 0 ? currentPhoto - 1 : photos.length - 1;

    this.setState({
      currentPhoto: newCurrentPhoto,
    });
  }

  handleRightArrowClick() {
    const { currentPhoto } = this.state;
    const { photos } = this.props;
    const newCurrentPhoto =
      currentPhoto < photos.length - 1 ? currentPhoto + 1 : 0;

    this.setState({
      currentPhoto: newCurrentPhoto,
    });
  }

  render() {
    const { photos } = this.props;
    const { currentPhoto } = this.state;
    const { viewPhotoButtonClick } = this.props;

    return (
      <div>
        <div className="photoModuleParentContainer">
          <div className="photoModuleLeftContainer">
            <div className="photoModuleLeftArrowContainer">
              <div className="photoModuleLeftArrow">
                <span className="FaChevronLeft" onClick={this.handleLeftArrowClick}>
                  <FaChevronLeft />
                </span>
              </div>

            </div>

            <div className="photoModuleMainPhotoContainer">
              <div className="photoModuleMainPhoto">
                <Photo photoClass={'modalPhoto'} photoUrl={photos[currentPhoto]}/>

              </div>

            </div>

            <div className="photoModuleRightArrowContainer">
              <div className="photoModuleRightArrow">
                <span className="FaChevronRight" onClick={this.handleRightArrowClick}>
                  <FaChevronRight />
                </span>

              </div>

            </div>

          </div>

          <div className="photoModuleRightContainer">
            <div className="photoModuleExitButtonContainer">
              <div className="photoModuleExitButton" onClick={viewPhotoButtonClick}>
                <span className="FaTimes">
                  <FaTimes />
                </span>
              </div>

            </div>

            <div className="photoModalCarouselContainer">
              <PhotoModalCarousel photos={photos} currentPhoto={currentPhoto}/>

            </div>

            <PhotoModalDescriptionContainer photos={photos} currentPhoto={currentPhoto}/>

          </div>

        </div>

      </div>
    )
  }
}

export default PhotoModal;
