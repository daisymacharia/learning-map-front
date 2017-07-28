import { expect } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from '../../store/store';
import TagEditor from '../tag-editor/tag-editor.component';
import IdeaFormComponent from './idea-form.component';

describe('<IdeaFormComponent />', () => {
  const wrapper: any = mount(<Provider store={configureStore({})}><Router><IdeaFormComponent /></Router></Provider>);
  it('renders idea form', () => {
    expect(wrapper.render().find('#idea-form')).to.have.length(1);
  });

  it('renders a tag editor component', () => {
    expect(wrapper.find(TagEditor)).to.have.length(1);
  });

  it('renders form description label', () => {
    expect(wrapper.contains(<label>What is your idea?</label>)).to.equal(true);
  });

  it('renders form heading', () => {
    expect(wrapper.contains(<h2>CONTRIBUTE AN IDEA</h2>)).to.equal(true);
  });

});
