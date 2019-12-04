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
    };
    this.handleViewPhotosButtonClick = this.handleViewPhotosButtonClick.bind(this);
  }

  handleViewPhotosButtonClick() {
    this.setState({
      showModal: !this.state.showModal,
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
    const { photos } = this.state;
    const content = showContent ? <Content photos={photos} handleViewPhotosButtonClick={this.handleViewPhotosButtonClick}/> : null;

    const { showModal } = this.state;
    let photoModal = showModal ? <PhotoModal viewPhotoButtonClick={this.handleViewPhotosButtonClick} photos={photos}/> : null;

    return (
      <div>
        {photoModal}
        {content}
      </div>
    );
  }
}

export default App;
