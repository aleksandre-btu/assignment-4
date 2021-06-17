import { useEffect, useState } from 'react';
import axios from 'axios';

const useBackend = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(url);
    let arr = [];
    axios
      .get('https://reqres.in/api/' + url)
      .then(response => {
        console.log(response);
        for (let key in response.data.data) {
          arr.push(response.data.data[key]);
        }
        return arr;
      })
      .then(arr => setData(arr))
      .catch(err => console.log(err));
  }, [url]);
  return { data };
};

export default useBackend;
