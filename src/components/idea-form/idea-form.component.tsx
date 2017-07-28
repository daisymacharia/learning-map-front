import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Input, Snackbar } from 'react-toolbox';
import { newIdea } from '../../actions/actions';
import { IComponentProps, IComponentState } from '../../interfaces/ideaFormComponent';
import TagEditor from '../tag-editor/tag-editor.component';
import './idea-form.scss';

/**
 * Class representing form for idea submission
 * @class IdeaForm
 * @extends {React.Component<IComponentProps, any>}
 */
class IdeaForm extends React.Component<IComponentProps, IComponentState> {

  /**
   * Creates an instance of IdeaForm.
   * @param {any} props
   * @memberof IdeaForm
   */
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      description: '',
      formSubmitted: false,
      isSnackbarOpen: false,
      tags: [],
      title: '',
    };
  }

  /**
   * Set tags in state
   * @memberof IdeaForm
   */
  private setTags = (tags: string[]) => {
    this.setState(() => {
      return { tags };
    });
  }

  /**
   * Dismiss snackbar notification
   * @private
   * @memberof IdeaForm
   */
  private closeSnackbar = () => {
    this.setState(() => {
      return { isSnackbarOpen: false };
    });
  }

  /**
   * Render form for idea contribution
   * @returns
   * @memberof IdeaForm
   */
  public render() {
    return (
      <div>
        <form id="idea-form" onSubmit={this.handleSubmit}>
          <h2>CONTRIBUTE AN IDEA</h2>
          <label>What is your idea?</label>
          <div><Input type="text" label="Title"
            name="title" value={this.state.title}
            onChange={this.handleChange} required /></div>
          <div><Input type="text" label="Description"
            name="description" value={this.state.description}
            onChange={this.handleChange} multiline className="text-area" required /></div>
          <div><TagEditor name="tags" setTags={this.setTags} /></div>
          <Button type="submit" label="Submit Idea" />
        </form>
        <Snackbar
          action="Dismiss"
          active={this.state.isSnackbarOpen}
          label={this.state.formSubmitted ?
            'Idea was successfully submitted' : 'Idea failed to submit. Please try again!'}
          timeout={3000}
          className={this.state.formSubmitted ? 'form-success' : 'form-failure'}
          onClick={this.closeSnackbar}
          onTimeout={this.closeSnackbar}
          type="cancel"
        />
      </div>
    );
  }

  /**
   * Submit Idea
   * @private
   * @memberof IdeaForm
   */
  private handleSubmit(event) {
    event.preventDefault();
    this.props.submitIdea(this.state)
      .then(() => {
        this.setState({ isSnackbarOpen: true, formSubmitted: true });
      })
      .catch(() => {
        this.setState({ isSnackbarOpen: true, formSubmitted: false });
      });
  }

  /**
   * Set state on input change
   * @private
   * @param {any} value
   * @param {any} event
   * @memberof IdeaForm
   */
  private handleChange(value, event) {
    this.setState(() => {
      return { [event.target.name]: value };
    });
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitIdea: (ideaDetails) => dispatch(newIdea(ideaDetails)),
  };
};

export default connect(null, mapDispatchToProps)(IdeaForm);
