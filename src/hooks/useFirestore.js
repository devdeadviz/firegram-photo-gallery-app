import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unSub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot(
        //real time taking updation of new files and storing them in snap object.
        (snap) => {
          let documents = [];
          snap.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id });
          });
          setDocs(documents);
        }
      );

    return () => unSub(); //un-subscribe from the collection when we don't need it {clean up function}
  }, [collection]);

  return { docs };
};

export default useFirestore;
