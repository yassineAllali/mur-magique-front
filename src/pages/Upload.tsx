import axios from "../api";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [codes, setCodes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles: any) => {
    setCodes(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleFileUpload = () => {
    setLoading(true);
    const formData = new FormData();
    /*codes.forEach((code: any) => {
      formData.append("codes", code);
    });*/
    formData.append("code", codes[0]);
    axios
      .post("http://localhost:8080/codes", formData, {
        /* TODO: replace with actual endpoint */
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        navigate("/list");
      })
      .catch((error) => {
        setError(error.response.data);
        setLoading(false);
      });
  };

  return (
    <Container>
      <div className="flex flex-col items-center gap-5 w-full max-w-xl">
        <Title label="Upload" />
        <p>{error}</p>
        <div
          {...getRootProps()}
          className="w-full flex flex-col items-center py-5 border-2 border-dashed"
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
        {codes.map((file: any) => (
          <div key={file.name} className="w-full flex justify-between">
            <p>{file.name}</p>
            <p>{file.size} bytes</p>
          </div>
        ))}
        <Button
          label="Upload"
          onClick={handleFileUpload}
          isLoading={isLoading}
        />
      </div>
    </Container>
  );
};

export default Upload;
