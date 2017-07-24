// src/pages/addskill/okbbs.container.component.tsx

/**
 * okbbs component
 */

import * as React from 'react';
import {IOkbb} from '../../types/skills/skillTypes';
import './addskill.scss';
import Panel from './panel.component';

class Okbbs extends React.Component<any, any> {
  constructor(props: IOkbb) {
    super(props);
    this.state = {
      activeSection: '',
      behaviours: ['behaviour-item-1', 'behaviour-item-2'],
      beliefs: ['belief-item-1', 'belief-item-2'],
      knowledgeUnits: ['knowledge-item-1', 'knowledge-item-2'],
      outputs: ['output-item-1', 'output-item-2'],

    };
    this.handleAccordionToggle = this.handleAccordionToggle.bind(this);
    this.addOkbbItem = this.addOkbbItem.bind(this);
  }
  public handleAccordionToggle(activePanel) {
    if (this.state.activeSection === activePanel) {
      // close panel if it's open
      this.setState({
        activeSection: '',
      });
    }else {
      this.setState({
        activeSection: activePanel,
      });
    }
  }
  public addOkbbItem(title, item) {
    if (title === 'Outputs') {
      const outputs = this.state.outputs.slice();
      outputs.push(item);
      this.setState({
        outputs,
      });
    }else if (title === 'Knowledge Units') {
      const knowledgeUnits = this.state.knowledgeUnits.slice();
      knowledgeUnits.push(item);
      this.setState({
        knowledgeUnits,
      });
    }else if (title === 'Behaviours') {
      const behaviours = this.state.behaviours.slice();
      behaviours.push(item);
      this.setState({
        behaviours,
      });
    }else if (title === 'Beliefs') {
      const beliefs = this.state.beliefs.slice();
      beliefs.push(item);
      this.setState({
        beliefs,
      });
    }
  }
  public render() {
    return(
      <div>
        <h3>Provide OKBBs</h3>
        <Panel dataList={this.state.outputs} active={this.state.activeSection} addItem={this.addOkbbItem}
               handleToggle={this.handleAccordionToggle} title="Outputs" />
        <Panel dataList={this.state.knowledgeUnits} active={this.state.activeSection} addItem={this.addOkbbItem}
               handleToggle={this.handleAccordionToggle} title="Knowledge Units" />
        <Panel dataList={this.state.behaviours} active={this.state.activeSection} addItem={this.addOkbbItem}
               handleToggle={this.handleAccordionToggle} title="Behaviours" />
        <Panel dataList={this.state.beliefs} active={this.state.activeSection} addItem={this.addOkbbItem}
               handleToggle={this.handleAccordionToggle} title="Beliefs" />
      </div>
    );
  }
}

export default Okbbs;
