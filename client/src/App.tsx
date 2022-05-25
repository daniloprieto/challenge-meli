import React from 'react';
import { Layout } from './components/layout/layout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Item, ResponseItems } from './models/model';


const baseUrl = 'http://localhost:3000/api/'; 

function App() {

  const [items, setItems] = useState([] as Item[]);

  const getMethod = async () => {
    await axios.get(baseUrl+'items')
      .then((res) => {

        let data = res.data as ResponseItems; 
        setItems(data.items);
        console.log(items);
      })
      .catch((error)=> console.error(error))
  }

  useEffect(() => { if(items.length === 0) getMethod() });

  return (
    <>
      <Layout item={items[3]} />
    </>
  );
}

export default App;
