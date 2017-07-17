import * as React from 'react';
import Autocomplete from 'react-toolbox/lib/autocomplete';

const paths = {
  'Path Object 1': 'Path 1',
  'Path Object 2': 'Path 2',
  'Path Object 3': 'Path 3',
  'Path Object 4': 'Path 4',
  'Path Object 5': 'Path 5',
  'Path Object 6': 'Path 6',
};

class PathDropdown extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedPaths: [],
    };
  }
  public handleMultipleChange: any = (value) => {
    this.setState({selectedPaths: value});
  }
  public render() {
    return (
      <div>
        <Autocomplete
          onChange={this.handleMultipleChange}
          label="Provide path(s) you think this skill should be added to"
          source={paths}
          value={this.state.selectedPaths}
        />
      </div>
    );
  }
}

export default PathDropdown;
