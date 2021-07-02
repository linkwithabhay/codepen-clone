import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

const OpenSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="white">
      <rect fill="none" height="24" width="24" />
      <polygon points="21,11 21,3 13,3 16.29,6.29 6.29,16.29 3,13 3,21 11,21 7.71,17.71 17.71,7.71" />
    </svg>
  );
};
const CloseSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" fill="white">
      <rect fill="none" height="24" width="24" />
      <path d="M22,3.41l-5.29,5.29L20,12h-8V4l3.29,3.29L20.59,2L22,3.41z M3.41,22l5.29-5.29L12,20v-8H4l3.29,3.29L2,20.59L3.41,22z" />
    </svg>
  );
};

export default function Editor(props) {
  const { displayName, language, value, onChange } = props;

  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <>
      <div className={`editor-container ${open ? "" : "collapsed"}`}>
        <div className="editor-title">
          {displayName}
          <button className="expand-collapse-btn" onClick={() => setOpen((prev) => !prev)}>
            {open ? <CloseSVG /> : <OpenSVG />}
          </button>
        </div>
        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          className="codemirror-wrapper"
          options={{
            lineWrapping: true,
            lint: true,
            theme: "material", // Dynamically change the theme acc. to user input
            mode: language,
            lineNumbers: true,
          }}
        />
      </div>
    </>
  );
}
