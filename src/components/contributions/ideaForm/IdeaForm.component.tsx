import * as React from 'react';

import CustomDropdown from '../../../common/customDropdown/CustomDropdown';
import CustomTextInput from '../../../common/customTextInput/CustomTextInput';

// import './theme.css';

const countries = [
  {value: 'default', label: 'The first selection'},
];

const IdeaForm = (props: any) => {
  const handleChange = () =>  {
  };

  return (
    <div className="idea-form">
      <div className="idea-form-content">
        <CustomTextInput type="text" hint="Enter an Idea" name="name" />
        <CustomDropdown
          auto
          onChange={this.handleChange}
          source={countries}
          value="default"
        />
      </div>
    </div>
  );
};

export default IdeaForm;
