import * as React from 'react';
import {render} from 'react-dom';

import Contribution from './contribution.component';

const Contributions = (props: any) => {
  const contributions = props.data;
  return (
    <div>
      {
        contributions.map((contribution) => {
          return <Contribution contribution={contribution} />;
        })
      }
    </div>
  );
};

export default Contributions;
