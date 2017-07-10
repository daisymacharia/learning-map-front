import * as React from 'react';
import styled from 'styled-components';

// tslint:disable-next-line:no-empty-interface
interface IComponentProps {

}

class TagEditor extends React.Component<IComponentProps, any> {
  constructor(props: IComponentProps) {
    super(props);
    this.createTag = this.createTag.bind(this);
  }

  public render() {
    return (
      <TagField id="editableDivContainer">
        <div id="editableDiv" contentEditable={true} onKeyPress={this.createTag}> </div>
      </TagField>
    );
  }

  private removeTag(event) {
    const closeButton = event.target;
    const closeTag = closeButton.parentElement;
    const tagList = closeTag.parentElement;
    tagList.removeChild(closeTag);
  }
  // tslint:disable-next-line:no-empty
  private createTag(event) {
    const textDiv: any = $('#editableDiv');
    const textDivContainer: any = $('#editableDivContainer');
    const range: any = document.createRange();
    const selection: any = window.getSelection();
    const charCode = event.keyCode || event.which;
    // check if pressed key is a comma
    if (charCode === 44) {
      // get text content of next tag from tag field
      const newTag: any = textDiv.contents().filter(function() {
        return (this.nodeType === 3);
      });

      // check if text contains letters or numbers
      if (newTag[0] && newTag[0].textContent.match(/[a-zA-Z0-9]/i)) {
        // create new tag
        const newTagBox: any = document.createElement('div');
        const closeButton: any = document.createElement('button');
        closeButton.innerHTML = 'x';
        closeButton.onclick = this.removeTag;
        closeButton.className = 'closeTag';
        newTagBox.className = 'tag';
        textDivContainer.prepend(newTagBox);
        newTagBox.innerHTML = newTag[0].textContent;
        newTagBox.append(closeButton);
        newTagBox.contentEditable = 'false';
        // clear tag field of all text except tags
        textDiv.contents().filter(function() {
          return (this.nodeType === 3);
        }).remove();
        range.selectNodeContents(document.getElementById('editableDiv'));
        range.collapse(false);
        // selection.removeAllRanges();
        // selection.addRange(range);
        event.preventDefault();
      }
    }
  }

}

const TagField = styled.div`
  font-family: lato, sans-serif;
  height:40px;
  overflow-y:auto;
  border-radius:3px;
  resize: none;
  width: 100%;
  border: 0.5px solid grey;
  padding:10px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;

& .tag {
  background-color: #DADADA;
    color: #012935;
    display: inline-block;
    padding: 8px 8px;
    margin-right: 3px;
    margin-bottom:5px;
  border:none;

}

& #editableDiv {
  width: 100px;
}

& div:focus {
    outline:none;
  }
`;

export default TagEditor;
