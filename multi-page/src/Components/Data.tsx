import axios from "axios";
import React, { useEffect, useState } from "react";

type DataType = {
  fact: string;
  length: number;
};
export default function Data() {
  const [datas, setDatas] = useState<DataType>();

  useEffect(() => {
    const data = async () => {
      const res = await axios.get("https://catfact.ninja/fact");
      setDatas(res.data);
    };
    data();
  }, []);
  return (
    <div>
      <h1>{datas?.fact}</h1>
      <h1>{datas?.length}</h1>
    </div>
  );
}
