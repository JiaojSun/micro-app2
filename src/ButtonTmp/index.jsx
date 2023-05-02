import React, { useState, useEffect } from 'react';
import { reqToolList } from '../mock/request';

const Button = () => {
  const [list, setList] = useState([]); 

  const getData = async () => {
    const res = await reqToolList();
    console.log('res============');
    console.log(res);
    setList(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{width: '300px',
      height: '600px',
      border: '4px solid grey'
      }}>
      <div>工具01</div>
      {(list || []).map(item => {
        <div>工具{item.name}</div>
      })}
    </div>
  );
};

export default Button;
