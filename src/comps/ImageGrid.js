import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        // eslint-disable-next-line array-callback-return
        docs.map((doc) => {
          console.log(doc.url, doc.id);
          <div className="img-wrap" key={doc.id}>
            <img src={doc.url} alt="uploaded pic"></img>
          </div>;
        })}
    </div>
  );
};

export default ImageGrid;
