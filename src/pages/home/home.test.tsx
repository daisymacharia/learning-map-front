import * as React from 'react';

// Testing imports
import { expect } from 'chai';
import { shallow } from 'enzyme';

// pages
import { HomeComponent } from './home.component';

describe('<HomeComponent />', () => {
  const wrapper: any = shallow(<HomeComponent />);

  // Test if the landing page renders a Contribute button
  it('renders a contribute button', () => {
    expect(wrapper.contains(<a href="#" className="btn btn-contribute">CONTRIBUTE</a>)).to.equal(true);
  });

  // Test if the landing renders a search area
  it('renders a search area', () => {
    expect(wrapper.find('#search-bar')).to.have.length(1);
  });

  // Test if it displays abbreviated title C.A.L.M
  it('displays the abbreviated Title', () => {
    expect(wrapper.contains(<span id="calm-abbreviation">C.A.L.M</span>)).to.equal(true);
  });

  // Test if it displays the product title
  it('displays the product title', () => {
    expect(wrapper.contains(<span id="calm">The Collective Andela Learning Map</span>)).to.equal(true);
  });
});
