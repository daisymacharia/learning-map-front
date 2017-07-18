import * as React from 'react';
import { Button } from 'react-toolbox/lib/button';

// Testing imports
import { expect } from 'chai';
import { mount } from 'enzyme';

// component
import { AddResourceForm } from './AddResource.component';

describe('Test that <AddResource /> Component: ', () => {
  const wrapper: any = mount(<AddResourceForm saveResource={() => null} dispatch={() => null} toggle={() => null} />);

  // Test if the component renders a form
  it('renders a form element', () => {
    expect(wrapper.find('form').length).to.equal(1);
  });

  // Test if the form includes a h2 tag.
  it('renders a h2 element', () => {
    expect(wrapper.find('h2').length).to.equal(1);
  });

  it('renders a h2 element with the text: CONTRIBUTE A RESOURCE',() => {
    expect(wrapper.find('h2').text()).to.equal(' CONTRIBUTE A RESOURCE ');
  });

  // Test if the component renders 3 Input elements
  it('renders three Input elements', () => {
    expect(wrapper.find('Input').length).to.equal(3);
  });

  // Test if the component renders a TagEditor component
  it('renders a Tag Editor component', () => {
    expect(wrapper.find('TagEditor').length).to.equal(1);
  });

  // Test if the component renders a Button component
  it('renders a Button component', () => {
    expect(wrapper.find('Button').length).to.equal(1);
  });

  // displays a CONTRIBUTE A RESOURCE heading
  it('renders a heading with content: CONTRIBUTE A RESOURCE', () => {
    expect(wrapper.contains(<h2> CONTRIBUTE A RESOURCE </h2>)).to.equal(true);
  });

  // displays a label asking the user what resource he/she would like to share
  it('renders a label with a description for the user', () => {
    expect(wrapper.contains(<label> What resource would you like to share? </label>)).to.equal(true);
  });
});
