import React from 'react';
import $ from 'jquery';

import Photo from './Photo.jsx';
import PhotoModal from './PhotoModal.jsx';
import Content from './Content.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photosToRender: [],
      photoButtonClick: false,
      showContent: false,
    };
    this.handleShareButtonClick = this.handleShareButtonClick.bind(this);
    this.handleViewPhotosButtonClick = this.handleViewPhotosButtonClick.bind(this);
  }

  handleShareButtonClick() {

  }
  
  handleViewPhotosButtonClick() {
    this.setState({
      photoButtonClick: !this.state.photoButtonClick
    })
  }

  componentDidMount() {
    $.ajax({
      url: `/api/rooms/${this.props.roomId}`,
      method: 'GET',
      success: (photosToRender) => {
        this.setState({
          photosToRender: photosToRender,
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
    let content = showContent ? <Content photoUrl={this.state.photosToRender} viewPhotosButton={this.handleViewPhotosButtonClick}/> : null;

    const isViewPhotoButtonClicked = this.state.photoButtonClick;
    let photoModal;

    if (isViewPhotoButtonClicked) {
      photoModal = <PhotoModal photoButtonClick={this.handleViewPhotosButtonClick} photoDetails={this.state.photosToRender}/>;
    } else {
      photoModal = <span />;
    }

    return (
      <div>
        {photoModal}
        {content}

      </div> /*starting div*/
    );
  }
}

export default App;
