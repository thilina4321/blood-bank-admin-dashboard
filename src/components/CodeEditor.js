import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import classes from "./code-editor.module.css";
const CodeEditor = (props) => {
  const { value, setValue, label } = props;
  return (
    <div>
      <label style={{ margin: "10px 0" }}> {label} </label>
      <Editor
        editorState={value}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName={classes.code__body}
        onEditorStateChange={setValue}
      />
    </div>
  );
};

export default CodeEditor;
