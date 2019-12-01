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

            <div className="photoModalGradientContainer">
              <div className="photoModalCarouselContainer">
                <div className="photoModalCarouselLeftGradient"></div>
                  <PhotoModalCarousel photos={this.props.photoDetails} currentPhoto={this.state.currentPhoto}/>

              </div> {/*photoModalCarouselContainer*/}
              <div className="photoModalCarouselRightGradient"></div>
            </div> {/*photoModalGradientContainer*/}



            <PhotoModalDescriptionContainer photos={photos} currentPhoto={currentPhoto}/>

          </div>

        </div>

      </div>
    )
  }
}

const PhotoModalCarousel = (props) => {
  let carouselPhotos = props.photos.map((photo, i) => {
    if (i === props.currentPhoto) {
      return <Photo photoClass={'carouselPhoto'} photo={photo} key={i}/>
    } else {
      return <Photo photoClass={'carouselPhotoFade'} photo={photo} key={i}/>
    }
  })
  let offsetAmount = ((100/props.photos.length) * 2 + (props.currentPhoto * (100/props.photos.length)) * -1);
  return (
    <div className="photoModalCarousel" style={{
      'transform': "translateX(" + offsetAmount + "% )"
    }}>
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
