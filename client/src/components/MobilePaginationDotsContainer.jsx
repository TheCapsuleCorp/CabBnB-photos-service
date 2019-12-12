import React from 'react';
import { FaCircle } from 'react-icons/fa';
import '../../dist/MobilePaginationDotsContainer.css';

const MobilePaginationDotsContainer = (props) => {
  let dots = props.photo.map((photo, i) => {
    const photoClassName = i === props.currentPhoto ? "activeDot" : "dot";
    return (
      <div key={i} className={photoClassName}>
        <FaCircle />
      </div>
    );
  });

  return (
    <div className="mobilePaginationDotsContainer">
      {dots}
    </div>
  );
}

export default MobilePaginationDotsContainer;
