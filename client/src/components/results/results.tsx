import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Item, ResponseItems } from '../../models/model';
import { ItemService } from '../../services/item.service';

const Results = () => {

    const [items, setItems] = useState([] as Item[]);

    const getMethod = async () => {
      await ItemService.search()
        .then((res) => {
  
          let data = res.data as ResponseItems; 
          setItems(data.items);
          console.log(items);
        })
        .catch((error)=> console.error(error))
    }
  
    useEffect(() => { if (items.length === 0) getMethod() });


    return (
        <>
            <ul>
                {items.map((item) => (
                    <Link to={'/items/' + item.id}>
                        <li>{item.title}</li>
                    </Link>
                ))}
            </ul>
        </>
    );
};

export default Results;

