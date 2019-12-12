import React from 'react';
import $ from 'jquery';

import Content from './Content.jsx';
import Photo from './Photo.jsx';
import PhotoModal from './PhotoModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      showContent: false,
      showModal: false,
      currentPhoto: 0,
    };
    this.handleViewPhotosButtonClick = this.handleViewPhotosButtonClick.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
  }

  handleViewPhotosButtonClick() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  handleLeftArrowClick() {
    const { currentPhoto, photos } = this.state;
    const newCurrentPhoto =
      currentPhoto > 0 ? currentPhoto - 1 : photos.length - 1;

    this.setState({
      currentPhoto: newCurrentPhoto,
    });
  }

  handleRightArrowClick() {
    const { currentPhoto, photos } = this.state;
    const newCurrentPhoto =
      currentPhoto < photos.length - 1 ? currentPhoto + 1 : 0;

    this.setState({
      currentPhoto: newCurrentPhoto,
    });
  }

  componentDidMount() {
    $.ajax({
      url: `http://localhost:8080/api/rooms/${this.props.roomId}/photos`,
      method: 'GET',
      success: (photos) => {
        this.setState({
          photos: photos,
          showContent: true,
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  render() {
    const { currentPhoto, photos, showContent, showModal } = this.state;

    let content = showContent ?
      <Content
        photos={photos}
        handleViewPhotosButtonClick={this.handleViewPhotosButtonClick}
        currentPhoto={currentPhoto}
      /> : null;

    let photoModal = showModal ?
      <PhotoModal
        viewPhotoButtonClick={this.handleViewPhotosButtonClick}
        photos={photos}
        currentPhoto={currentPhoto}
        handleLeftArrowClick={this.handleLeftArrowClick}
        handleRightArrowClick={this.handleRightArrowClick}
      /> : null;

    return (
      <div>
        {photoModal}
        {content}
      </div>
    );
  }
}

export default App;
