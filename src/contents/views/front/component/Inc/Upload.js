import React, { useRef } from "react";

function Upload(props) {
  const uploadInput = useRef();
  const fnUpload = () => {
    uploadInput.current.click();
  };
  
  return (
  	<div className="com_input_upload">
      <input type="file" className="input_file" ref={uploadInput} />
      <button onClick={fnUpload} className={`btn_upload ${props.className}`}>
        {props.title && props.title}
      </button>
    </div>
  );
} 

export default Upload;