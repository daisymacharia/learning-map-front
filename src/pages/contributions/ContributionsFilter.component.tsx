// src/pages/contributions/ContributionsFilter.component.tsx
import * as React from 'react';
import {Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

class FiltersComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div className="filter-container">
        <div className="filterbar1">
          <Input type="search" icon="search" />
        </div>
        <div className="filterbar2">
          <div className="contributions-header">
            Contributions
            Recent
          </div>
        </div>
      </div>
    );
  }
}

export default FiltersComponent;
