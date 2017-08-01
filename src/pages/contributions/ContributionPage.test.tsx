import * as React from 'react';

import { Provider } from 'react-redux';
import { Button } from 'react-toolbox/lib/button';

import configureStore from '../../store/store';

// Testing imports
import { expect } from 'chai';
import { mount } from 'enzyme';

// component
import { ContributionPage } from './ContributionPage.component';
import ContributionsCard from './ContributionsCard';

const store = configureStore({});

describe('Contributions Test', () => {
  describe('Contributions Card', () => {
    const wrapper: any = mount(<Provider store={store}><ContributionsCard contributions={{}}/></Provider>)

    // Test if the component renders the cards
    it('renders card row div', () => {
      expect(wrapper.find('.contribution-card')).to.have.length(1);
    })

    // Test if the component renders card title
    it('renders the card title', () => {
      expect(wrapper.find('h4 .title')).to.have.length(1);
    });

  })

  describe('Contributions Page', () => {
    const wrapper1: any = mount(<Provider store={store}><ContributionPage /></Provider>)

    // Test if contributions props is empty at the initial state
    it('shows contributions props as empty', () => {
      expect(wrapper1.props().children.props).empty;
    });

  });
})
