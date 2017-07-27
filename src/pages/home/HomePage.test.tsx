import * as React from 'react';

// Testing imports
import { expect } from 'chai';
import { shallow } from 'enzyme';

// pages
import { HomePage } from './HomePage.component';

describe('<HomePage />', () => {
  const wrapper: any = shallow(<HomePage />);

  // Test if the landing page renders a Contribute button
  it('renders a contribute button', () => {
    expect(wrapper.contains(<a className="btn" id="btn-contribute">
      <div id="contribute-button">CONTRIBUTE</div>
    </a>)).to.equal(true);
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

  // Test if the landing page renders all contribution button
  it('renders all contribution button', () => {
    expect(wrapper.contains(<a href="/contributions" className="btn btn-all-contribute">ALL CONTRIBUTIONS</a>)).to.equal(true);
  });
});
