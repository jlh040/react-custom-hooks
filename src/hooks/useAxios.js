import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const useAxios = baseUrl => {
  const [respData, setRespData] = useState([]);
  const addData = async (urlResource='') => {
    const res = await axios.get(baseUrl + urlResource)
    setRespData(currData => [...currData, {...res.data, id: uuid()}])
  };

  return [respData, addData];
};

export default useAxios;