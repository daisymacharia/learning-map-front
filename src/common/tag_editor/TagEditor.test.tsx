import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import TagEditorComponent from './TagEditor.component';

describe('<TagEditorComponent />', () => {
  const wrapper: any = shallow(<TagEditorComponent />);

  it('renders tag editor', () => {
    expect(wrapper.render().find('#tag-input-container')).to.have.length(1);
  });

  it('renders tag editor contents', () => {
    expect(wrapper.html()).to
      .equal('<div id="tag-input-container"><input type="text" id="tag-input" placeholder="Add Tag.."/></div>');
  });
});
