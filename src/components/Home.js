import React, { useState, useEffect } from "react";
import db from "./firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore/lite";

const Home = () => {
  const [data, setData] = useState([]);
  const collectionRef = collection(db, "contact");

  useEffect(() => {
    const getContact = async () => {
      const info = await getDocs(collectionRef);
      const display = info.docs.map((e) => {
        return {
          data: e._document.data.value.mapValue.fields,
          key: e._document.key.path.segments[6],
        };
      });

      let obj = display.map((e) => {
        return {
          key: e.key,
          email: e.data.email.stringValue,
          name: e.data.name.stringValue,
          phone: e.data.phone.stringValue,
          message: e.data.message.stringValue,
        };
      });

      setData(obj);
    };
    getContact();
  }, [data]);

  const handleDelete = async (e) => {
    let index = data.indexOf((i)=>i.key == e)
    data.splice(index,1)

    let contactSelect = doc(db,"contact",e);
  await deleteDoc(contactSelect);
  }


  return (
    <>
    {data.map((e)=>{
      return <div>
        <p>{e.name}</p>
        <button onClick={()=>handleDelete(e.key)}>delete</button>
      </div>
    }
    )}
    </>
  );
};

export default Home;
