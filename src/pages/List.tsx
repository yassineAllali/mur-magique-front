import axios from "axios";
import { useState } from "react";
import Container from "../components/Container";
import LoadingSpinner from "../components/LoadingSpinner";
import Table from "../components/table/Table";
import TableItem from "../components/table/TableItem";
import Title from "../components/Title";
import useFetch from "../hooks/useFetch";

const List = () => {
  const [isLoadingDelete, setLoadingDelete] = useState(false);
  const {
    data: files,
    loading,
    error,
    refetch,
  } = useFetch(
    "http://localhost:8080/codes"
  ); /* TODO: replace with actual endpoint */

  const handleDelete = (id: string) => {
    setLoadingDelete(true);
    axios.delete(`http://localhost:8080/codes/${id}`).then(() => {
      refetch();
      setLoadingDelete(false);
    });
  };

  if (loading || isLoadingDelete) {
    return <LoadingSpinner />;
  }

  if (error || !files) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <Container>
      <div className="w-full max-w-5xl flex flex-col items-center gap-5">
        <Title label="File d'attente" />
        <Table headers={["Name", "File Size", "Uploader", "Date", ""]}>
          {files.map((file: any, index: number) => (
            <TableItem
              file={file}
              key={file.id}
              onDelete={() => handleDelete(file.id)}
              highlight={index === 0}
            />
          ))}
        </Table>
      </div>
    </Container>
  );
};

export default List;
