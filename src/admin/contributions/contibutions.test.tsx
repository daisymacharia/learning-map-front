import * as React from 'react';

// Testing imports
import { expect } from 'chai';
import { shallow } from 'enzyme';

// pages
import { ContributionsComponent } from './contributions.component';

describe('<ContributionsComponent />', () => {
  const wrapper: any = shallow(<ContributionsComponent />);

  // Test if it renders a contributions
  it('renders a contributions', () => {
    expect(wrapper.find('#contributions')).to.have.length(1);
  });

});
