import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Photo from '../client/src/components/Photo.jsx';

const photo = {
  photo: {
    url: 'https://cap-bnb-photo-service.s3.us-east-2.amazonaws.com/1-stream-belmont-3.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    roomId: 4160333
  }
};


configure({ adapter: new Adapter() });

describe('Photos', () => {
  test('should render Photo component', () => {
    const output = shallow(
      <Photo photoClass={'leftPhoto'} photo={photo} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
