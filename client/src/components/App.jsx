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
      viewPhotoButtonClick: false,
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
    if (this.state.currentPhoto > 0) {
      this.setState({
        currentPhoto: this.state.currentPhoto -= 1,
      });
    } else {
      this.setState({
        currentPhoto: this.state.currentPhoto = this.state.photos.length - 1,
      });
    }
  }

  handleRightArrowClick() {
    if (this.state.currentPhoto < this.state.photos.length - 1) {
      this.setState({
        currentPhoto: this.state.currentPhoto += 1,
      });
    } else {
      this.setState({
        currentPhoto: this.state.currentPhoto = 0,
      });
    }
  }

  componentDidMount() {
    $.ajax({
      url: `/api/rooms/${this.props.roomId}/photos`,
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
    const { showContent } = this.state;
    let content = showContent ? <Content photos={this.state.photos}
      handleViewPhotosButtonClick={this.handleViewPhotosButtonClick}
      currentPhoto={this.state.currentPhoto}/> : null;

    const isViewPhotoButtonClicked = this.state.viewPhotoButtonClick;
    let photoModal = isViewPhotoButtonClicked ? <PhotoModal
      viewPhotoButtonClick={this.handleViewPhotosButtonClick}
      photoDetails={this.state.photos}
      currentPhoto={this.state.currentPhoto}
      handleLeftArrowClick={this.handleLeftArrowClick}
      handleRightArrowClick={this.handleRightArrowClick} /> : null;

    return (
      <div>
        {photoModal}
        {content}
      </div>
    );
  }
}

export default App;
