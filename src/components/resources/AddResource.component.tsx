import * as React from 'react';
import { connect } from 'react-redux';
import { Snackbar } from 'react-toolbox';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import { saveResource } from '../../actions/resourceAction';
import TagEditor from '../../common/tag_editor/TagEditor.component';
import { IResourceProps } from '../../interfaces/resources.d';
import { IResourceState } from '../../interfaces/resources.d';
import './resources.scss';

export class AddResourceForm extends React.Component<IResourceProps, IResourceState> {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      description: '',
      error: false,
      label: '',
      tags: [],
      title: '',
      url: '',
    };

    this.setTags = this.setTags.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitResource = this.submitResource.bind(this);
    this.saveUrlToArray = this.saveUrlToArray.bind(this);
    this.handleSnackbarClick = this.handleSnackbarClick.bind(this);
    this.handleSnackbarTimeout = this.handleSnackbarTimeout.bind(this);
  }

  public render() {
    return (
      <form id="form">
        <h2> CONTRIBUTE A RESOURCE </h2>
        <label> What resource would you like to share? </label>
        <br />
        <Input type="text" label="Title" name="title" onChange={this.handleChange}
          value={this.state.title} required />
        <Input type="text" label="Description" name="description" rows={2}
          multiline required onChange={this.handleChange} value={this.state.description} />
        <Input type="url" label="URL" name="url" required onChange={this.handleChange}
          value={this.state.url} />
        <div><TagEditor name="tags" setTags={this.setTags} /></div>
        <br />
        <br />
        <Button type="submit" label="Add Resource" onClick={this.submitResource} raised primary />
        <Snackbar
          action="Dismiss"
          active={this.state.active}
          className = {this.state.error ? 'form-failure' : 'form-success'}
          label={this.state.label}
          timeout={2000}
          onClick={this.handleSnackbarClick}
          onTimeout={this.handleSnackbarTimeout}
          type="cancel"
        />
      </form>
    );
  }

  private handleSnackbarClick = (event, instance) => {
    this.setState({ active: false, error: false, label: '' });
  }

  private handleSnackbarTimeout = (event, instance) => {
    this.setState({ active: false, error: false, label: '' });
  }

  private saveUrlToArray = (url) => {
    const tempArray = url.split(',');
    const urlArray = tempArray.map((arr, index) => {
      return arr.trim();
    });
    return urlArray;
  }

  private setTags = (tags: string[]): void => {
    this.setState({
      tags,
    });
  }

  private handleChange = (value, event): void => {
    this.setState({ [event.target.name]: value });
  }

  private urlIsValid = (): boolean => {
    let urlIsValid: boolean = true;

    if (this.state.url.trim().substr(0, 4) !== 'http') {
      urlIsValid = false;
    }
    return urlIsValid;
  }

  private formIsValid = (): boolean => {
    if (!this.state.title.trim()) {
      this.setState({ active: true, error: true, label: 'Title can not be null.' });
      return false;
    }

    if (!this.state.description.trim()) {
      this.setState({ active: true, error: true, label: 'Description can not be null.' });
      return false;
    }

    if (!this.urlIsValid()) {
      this.setState({ active: true, error: true, label: 'URL is not valid.' });
      return false;
    }

    if (this.state.tags.length === 0) {
      this.setState({ active: true, error: true, label: 'Tags can not be null.' });
      return false;
    }

    return true;
  }

  private submitResource(event) {
    event.preventDefault();

    if (this.formIsValid()) {
      const resource = {
        description: this.state.description,
        tags: this.state.tags,
        title: this.state.title,
        url: this.saveUrlToArray(this.state.url),
      };

      this.props.saveResource(resource)
        .then(() => {
          this.setState({ active: true, label: 'Resource Successfully Submitted!' });
          this.props.toggle();
        })
        .catch((error) => {
          this.setState({ active: true, error: true, label: error });
        });

      return true;
    }
  }
}

export default connect(null, { saveResource })(AddResourceForm);
