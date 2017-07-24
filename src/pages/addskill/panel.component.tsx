/**
 * Panel component
 * receives part of okbb state and displays it, addItem action and section name
 */

import * as React from 'react';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import { List, ListItem } from 'react-toolbox/lib/list';

import './addskill.scss';

class Panel extends React.Component<{dataList, title, handleToggle, active, addItem}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      addedItem: '',
      itemInput: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  public handleInputChange(value) {
    this.setState({
      addedItem: value,
    });
  }
  public render() {
    return(
      <div>
        <Button className="panel-head" label={this.props.title} primary raised
               onClick={() => this.props.handleToggle(this.props.title)} />
        <section className={this.props.title === this.props.active ? 'panel-open' : 'panel-closed' }>
          <List selectable>
           {this.props.dataList.map((listItem) => <ListItem leftIcon="delete" caption={listItem} key={listItem} /> )}
          </List>
          <Input label="add item" onChange={this.handleInputChange} />
          <Button label="Add" onClick={() => this.props.addItem(this.props.title, this.state.addedItem)}/>
        </section>
      </div>
    );
  }
}

export default Panel;
