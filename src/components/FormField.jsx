import React, { useState } from 'react'; 
import { useDropzone } from 'react-dropzone';
import { FaTrash } from 'react-icons/fa';

const FormField = ({ label, placeholder, required = false }) => {
  const [text, setText] = useState("");

  
  const onDropText = (acceptedFiles) => {
    const reader = new FileReader();
    reader.onload = () => setText(reader.result);
    reader.readAsText(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDropText,
    accept: '.txt',
    multiple: false,
    noClick: true,  
    noKeyboard: true, 
  });

  
  const handleDeleteText = () => {
    setText("");
  };

  return (
    <div className="form-field">
      <label>{label}{required && " *"}</label>

      
      <div {...getRootProps()} className="dropzone">
        <textarea
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="6"
          className="w-full mb-5 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
       
        <input {...getInputProps()} style={{ display: 'none' }} />
        <p className="drag-instruction">
          {text ? "" : ""}
        </p>
      
        {text && (
          <button className="delete-icon" onClick={handleDeleteText}>
            <FaTrash />
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;
