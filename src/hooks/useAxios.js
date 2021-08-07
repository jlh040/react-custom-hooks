import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const useAxios = url => {
  const [respData, setRespData] = useState([]);
  const addData = async () => {
    const res = await axios.get(url);
    setRespData(currData => [...currData, {...res.data, id: uuid()}])
  };

  return [respData, addData];
};

export default useAxios;