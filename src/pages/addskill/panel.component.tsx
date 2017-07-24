/**
 * Panel component
 * receives part of okbb state and displays it, addItem action and section name
 */

import * as React from 'react';
import {Button} from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import { List, ListItem } from 'react-toolbox/lib/list';

import './addskill.scss';

class Panel extends React.Component<{dataList, title, handleToggle, active}, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return(
      <div>
        <Button className="panel-head" label={this.props.title} primary raised
               onClick={() => this.props.handleToggle(this.props.title)} />
        <section className={this.props.title === this.props.active ? 'panel-open' : 'panel-closed' }>
          <List selectable>
           {this.props.dataList.map((listItem) => <ListItem caption={listItem} key={listItem} /> )}
          </List>
          <Input type="text" label="Add item" />
          <Input type="button" label="Add"/> {/* onclick addItem to list*/}
        </section>
      </div>
    );
  }
}

export default Panel;
