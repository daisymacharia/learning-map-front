import * as React from 'react';
import { IComponentProps } from '../../interfaces/tag_editor.d';
import './tag_editor.scss';

class TagEditor extends React.Component<IComponentProps, any> {
  constructor(props: IComponentProps) {
    super(props);
    this.createTag = this.createTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.state = {
      tags: [],
    };
  }

  public render() {
    return (
      <div id="tag-input-container">
        <input type="text" id="tag-input" placeholder="Add Tag.." onKeyPress={this.createTag} />
      </div>
    );
  }

  /**
   *  Add tags to editor
   *
   * @private
   * @param {*} event
   * @memberof TagEditor
   */
  private createTag(event: any) {
    const textInput: any = document.getElementById('tag-input');
    const textInputContainer: any = document.getElementById('tag-input-container');
    const charCode: any = event.keyCode || event.which;
    // check if pressed key is a comma
    if (charCode === 44) {
      // get text content of next tag from tag field
      const newTag: any = textInput.value;

      // check if text contains letters or numbers
      if (newTag && newTag.match(/[a-zA-Z0-9]/i) && !this.state.tags.includes(newTag)) {

        // create new tag
        const tagInput = document.getElementById('tag-input');
        const newTagBox: any = document.createElement('div');
        const closeButton: any = document.createElement('button');
        closeButton.innerHTML = '&#10005';
        closeButton.onclick = this.removeTag;
        closeButton.className = 'close_tag';
        newTagBox.className = 'tag';
        textInputContainer.insertBefore(newTagBox, tagInput);
        newTagBox.innerHTML = newTag;
        newTagBox.append(closeButton);
        newTagBox.contentEditable = 'false';

        // add new tag to state
        this.setState({ tags: [...this.state.tags, newTag] }, () => {
          this.props.setTags(this.state.tags);
        });

        // clear input field after creating tag
        textInput.value = '';
        event.preventDefault();
      }
    }
  }

  /**
   * Deletes tags from editor
   *
   * @private
   * @param {any} event
   * @memberof IdeaForm
   */
  private removeTag(event: any) {
    const closeButton: any = event.target;
    const closeTag: any = closeButton.parentElement;
    const tagList: any = closeTag.parentElement;
    const tagIndex = [].indexOf.call(tagList.childNodes, closeTag);
    const tags = this.state.tags.filter((tag, index) => index !== tagIndex);
    this.setState({ tags }, () => {
      this.props.setTags(this.state.tags);
    });
    tagList.removeChild(closeTag);

  }
}

export default TagEditor;
