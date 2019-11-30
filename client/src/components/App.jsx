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
    };
    this.handleViewPhotosButtonClick = this.handleViewPhotosButtonClick.bind(this);
  }

  handleShareButtonClick() {

  }

  handleViewPhotosButtonClick() {
    this.setState({
      viewPhotoButtonClick: !this.state.viewPhotoButtonClick,
    });
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
    let content = showContent ? <Content photos={this.state.photos} handleViewPhotosButtonClick={this.handleViewPhotosButtonClick}/> : null;

    const isViewPhotoButtonClicked = this.state.viewPhotoButtonClick;
    let photoModal;

    if (isViewPhotoButtonClicked) {
      photoModal = <PhotoModal viewPhotoButtonClick={this.handleViewPhotosButtonClick} photoDetails={this.state.photos}/>;
    } else {
      photoModal = <span />;
    }

    return (
      <div>
        {photoModal}
        {content}
      </div>
    );
  }
}

export default App;
