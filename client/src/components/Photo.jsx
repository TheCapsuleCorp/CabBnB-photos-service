import React from 'react';

const Photo = (props) => {
  let photoUrl = props.photoUrl ? props.photoUrl.url : 'http://blank.org/';

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
