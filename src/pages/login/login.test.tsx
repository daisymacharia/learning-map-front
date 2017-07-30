import * as React from 'react';

// Testing imports
import { expect } from 'chai';
import { shallow } from 'enzyme';

// pages
import { LoginComponent } from './login.component';

const localStorage = '';

describe('<LoginComponent />', () => {
  const wrapper: any = shallow(<LoginComponent />);

  // Test if the landing page renders a Contribute button
  it('renders a login button', () => {
    expect(wrapper.find('#login-button')).to.have.length(1);
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
