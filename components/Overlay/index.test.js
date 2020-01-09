import React from 'react';
import renderer from 'react-test-renderer';
import Overlay from '../Overlay';

describe('Showing or hiding overlay', () => {
  test('Show overlay', () => {
    const component = renderer.create(<Overlay showOverlay />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Hide overlay', () => {
    const component = renderer.create(<Overlay showOverlay={false} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('Show overlay with no-icon class', () => {
    const component = renderer.create(<Overlay showOverlay noIcon />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
