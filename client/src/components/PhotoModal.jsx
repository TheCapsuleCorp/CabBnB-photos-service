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
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
  }

  handleLeftArrowClick() {
    if (this.state.currentPhoto > 0) {
      this.setState({
        currentPhoto: this.state.currentPhoto -= 1,
      });
    } else {
      this.setState({
        currentPhoto: this.state.currentPhoto = this.props.photoDetails.length - 1,
      });
    }
  }

  handleRightArrowClick() {
    if (this.state.currentPhoto < this.props.photoDetails.length - 1) {
      this.setState({
        currentPhoto: this.state.currentPhoto += 1,
      });
    } else {
      this.setState({
        currentPhoto: this.state.currentPhoto = 0,
      });
    }

  }

  render() {

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
                <Photo photoClass={'modalPhoto'} photoUrl={this.props.photoDetails[this.state.currentPhoto]}/>

              </div> {/*photoModuleMainPhoto*/}

            </div> {/*photoModuleMainPhotoContainer*/}

            <div className="photoModuleRightArrowContainer">
              <div className="photoModuleRightArrow">
                <span className="FaChevronRight"  onClick={this.handleRightArrowClick}> <FaChevronRight /> </span>

              </div> {/*photoModuleRightArrow*/}

            </div> {/*photoModuleRightArrowContainer*/}

          </div> {/*photoModuleLeftContainer*/}

          <div className="photoModuleRightContainer">
            <div className="photoModuleExitButtonContainer">
              <div className="photoModuleExitButton" onClick={this.props.viewPhotoButtonClick}>
                <span className="FaTimes"> <FaTimes /> </span>
              </div> {/*photoModuleExitButton*/}

            </div> {/*photoModuleExitButtonContainer*/}

            <div className="photoModalCarouselContainer">
              <PhotoModalCarousel photos={this.props.photoDetails} currentPhoto={this.state.currentPhoto}/>

            </div> {/*photoModalCarouselContainer*/}

            <PhotoModalDescriptionContainer photos={this.props.photoDetails} currentPhoto={this.state.currentPhoto}/>

          </div> {/*photoModuleRightContainer*/}

        </div> {/*photoModuleParentContainer*/}

      </div> /*starting div*/
    )
  }
}

const PhotoModalCarousel = (props) => {
  let carouselPhotos = props.photos.map((photo, i) => {
    if (i === props.currentPhoto) {
      return <Photo photoClass={'carouselPhoto'} photoUrl={photo} key={i}/>
    } else {
      return <Photo photoClass={'carouselPhotoActive'} photoUrl={photo} key={i}/>
    }
  })
  return (
    <div className="photoModalCarousel">
      {carouselPhotos}
    </div>
  );
};

const PhotoModalDescriptionContainer = (props) => {
  let totalPhotos = props.photos.length;
  let currentPhoto = props.currentPhoto + 1;
  let description = props.photos.length ? props.photos[props.currentPhoto].description : "";
  return (
    <div className="photoModuleDescriptionContainer">
      <div className="photoModulePhotoNumber">
        {`${currentPhoto} / ${totalPhotos}`}
      </div>
      <div className="photoModulePhotoDescription">
        {description}
      </div>
    </div>
  );
};

export default PhotoModal;
