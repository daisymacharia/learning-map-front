// src/pages/addskill/okbbs.container.component.tsx

/**
 * okbbs component
 */

import * as React from 'react';
import {IOkbb} from '../../types/skills/skillTypes';

import Panel from './panel.component';
import './addskill.scss';

class Okbbs extends React.Component<any, any> {
  constructor(props: IOkbb) {
    super(props);
    // have a react state for managing toggling accordion panels
    // okbbs data to be stored in the store
    this.state = {
      activeSection: 0, // 0 none, 1-first ... 4-last
      okbbs: {
        outputs: ['output-item-1', 'output-item-2'],
        knowledgeUnits: ['knowledge-item-1', 'knowledge-item-2'],
        behaviours: ['behaviour-item-1', 'behaviour-item-2'],
        beliefs: ['belief-item-1', 'belief-item-2'],
      },
    };
    this.handleAccordionToggle = this.handleAccordionToggle.bind(this);
  }
  private handleAccordionToggle(requester: number) {
    // called on clicking panel section, manages accordion state
    /*
    * if requester is active:
    *   deactivate
    * else:
    *   if activeSection not 0:
    *     deactivate active section
    *     activate requester
    * */
    // all closed: false 0
    let currentActive = this.state.activeSection;
    if (currentActive === 0) {
      currentActive = requester;
      this.setState({ activeSection: currentActive });
    }else if (currentActive === requester) {
      this.setState({ activeSection: 0 });
    }else {
      this.setState({ activeSection: requester });
    }
  }
  public render() {
    return(
      <div>
        <h3>Provide OKBBs</h3>
        <Panel dataList={this.props.okbb.outputs } />
        <Panel dataList={this.props.okbb.knowledgeUnits } />
        <Panel dataList={this.props.okbb.behaviours } />
        <Panel dataList={this.props.okbb.beliefs } />
      </div>
    );
  }
}

export default Okbbs;
