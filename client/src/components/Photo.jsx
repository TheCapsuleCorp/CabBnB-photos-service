import React from 'react';

const Photo = (props) => {
  let photoUrl = props.photoUrl ? props.photoUrl.url : 'https://i.ytimg.com/vi/QggJzZdIYPI/maxresdefault.jpg';

  var style = {
    backgroundImage: 'url(' + photoUrl + ')',
  };

  return (
    <div className={props.photoClass} style={style}>
      {props.children}
    </div>
  );
};

export default Photo;
