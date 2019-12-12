import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import '../dist/index.css';

let listingId = window.location.href.split('/')[4];
if (!listingId || listingId.length !== 8) {
  listingId = '11111142';
}

const Photos = () => (
  <App roomId={listingId} />
);

export default Photos;
