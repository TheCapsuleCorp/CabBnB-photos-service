import React from 'react';
const DEFAULT_PHOTO_BACKGROUND = 'https://i.ytimg.com/vi/QggJzZdIYPI/maxresdefault.jpg';

const Photo = (props) => {
  let photoUrl = props.photo ? props.photo.url : DEFAULT_PHOTO_BACKGROUND;

  let divStyle = {
    backgroundImage: 'url(' + photoUrl + ')',
  };

  return (
    <div className={props.photoClass} style={divStyle}>
      {props.children}
    </div>
  );
}

export default Photo;
