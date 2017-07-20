/**
 * Panel component
 * receives part of okbb state and displays it, addItem action and section name
 */

import * as React from 'react';
import {Button} from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import { List, ListItem } from 'react-toolbox/lib/list';

import './addskill.scss';

const Panel = ({dataList}) => {
  return (
  <div>
    <Button className="panel-head" label="Section toggle" raised primary />
    <section className="panel-hide">
      {/*const ItemsList = {dataList.map((listItem) => <ListItem caption={listItem}/> ) }*/}
      <List selectable >
        {dataList.map((listItem) => <ListItem caption={listItem}/> ) }
      </List>
      <form>
        <Input type="text" label="Add item" />
        <Input type="Add" /> {/* onclick addItem to list*/}
      </form>
    </section>
  </div>
  );
};

export default Panel;
