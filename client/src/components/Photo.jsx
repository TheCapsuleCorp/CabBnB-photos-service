import React from 'react';
const DEFAULT_PHOTO_URL = 'https://i.ytimg.com/vi/QggJzZdIYPI/maxresdefault.jpg';
const DEFAULT_OPACITY = 1;

const Photo = (props) => {
  let photoUrl = props.photo ? props.photo.url : DEFAULT_PHOTO_URL;

  var divStyle = {
    backgroundImage: 'url(' + photoUrl + ')',
  };

  return (
    <div className={props.photoClass} style={divStyle}>
      {props.children}
    </div>
  );
};

export default Photo;
