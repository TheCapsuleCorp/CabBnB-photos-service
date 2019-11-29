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
              <PhotoModuleCarousel photos={this.props.photoDetails} />

            </div> {/*photoModuleCarouselContainer*/}

            <PhotoModuleDescriptionContainer photos={this.props.photoDetails} />

          </div> {/*photoModuleRightContainer*/}

        </div> {/*photoModuleParentContainer*/}

      </div> /*starting div*/
    )
  }
}

const PhotoModuleCarousel = (props) => {
  let carouselPhotos = props.photos.map((photo, i) => {
    return <Photo photoClass={'carouselPhoto'} photoUrl={photo} key={i}/>
  })
  return (
    <div className="photoModuleCarousel">
      {carouselPhotos}
    </div>
  );
};

const PhotoModuleDescriptionContainer = (props) => {
  let count = props.photos.length;
  let description = props.photos.length ? props.photos[0].description : "";
  return (
    <div className="photoModuleDescriptionContainer">
      <div className="photoModulePhotoNumber">
        {`${count} / ${count}`}
      </div>
      <div className="photoModulePhotoDescription">
        {description}
      </div>
    </div>
  );
};

export default PhotoModal;
