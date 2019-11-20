import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click');
  }

  render() {
    return (
      <div>
        <div className="parent">
          <div className="shareAndSaveContainer">
            <div className="shareButton" onClick={this.handleClick}>
              <a className="share" href="#"><FaBeer />  Share</a>
            </div>
            <div className="saveButton" onClick={this.handleClick}>
              <a className="save" href="#"><FaHeart />  Save</a>
            </div>
          </div>



          <div className="viewPhotosButton" onClick={this.handleClick}>
            <a href="https://www.airbnb.com/rooms/3447812/slideshow/?check_in=2019-11-22&check_out=2019-11-25&adults=2&children=0&infants=0">View Photos</a>
          </div>
        </div><br/><br/><br/>

        <div className="photoDescription">Photo Description is styled to look like this</div>
        <p> Comparison description, here.</p>

      </div>
    );
  }
}

export default App;
