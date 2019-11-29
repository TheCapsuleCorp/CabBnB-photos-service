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
    };
    this.handleViewPhotosButtonClick = this.handleViewPhotosButtonClick.bind(this);
  }

  handleViewPhotosButtonClick() {
    this.setState({
      photoButtonClick: !this.state.photoButtonClick
    })
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
    let content = showContent ? <Content photos={this.state.photos} viewPhotosButton={this.handleViewPhotosButtonClick}/> : null;

    return (
      <div>
        {content}
      </div> /*starting div*/
    );
  }
}

export default App;
