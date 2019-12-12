import React from 'react';

const DEFAULT_PHOTO_BACKGROUND = 'https://i.ytimg.com/vi/QggJzZdIYPI/maxresdefault.jpg';

const Photo = ({children, photo, photoClass}) => {
  let photoUrl = photo ? photo.url : DEFAULT_PHOTO_BACKGROUND;

  let divStyle = {
    backgroundImage: 'url(' + photoUrl + ')',
  };

  return (
    <div className={photoClass} style={divStyle}>
      {children}
    </div>
  );
};

export default Photo;
