import React from 'react';
import $ from 'jquery';

import Photo from './Photo.jsx';
import Content from './Content.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      showContent: false,
      photoButtonClick: false,
    };
    this.handleViewPhotosButtonClick = this.handleViewPhotosButtonClick.bind(this);
  }

<<<<<<< HEAD
=======
  handleShareButtonClick() {

  }

>>>>>>> update photo modal to dynamically render carousel photos, add description and photo number placeholder
  handleViewPhotosButtonClick() {
    this.setState({
      photoButtonClick: !this.state.photoButtonClick,
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

    return (
      <div>
        {content}
<<<<<<< HEAD
      </div>
=======
      </div> /*starting div*/
>>>>>>> update photo modal to dynamically render carousel photos, add description and photo number placeholder
    );
  }
}

export default App;
