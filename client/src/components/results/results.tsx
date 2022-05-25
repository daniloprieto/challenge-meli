import React, { useEffect, useState } from 'react';
import './results.scss';
import { Link, useSearchParams } from 'react-router-dom';
import { Category, Item, ResponseItems } from '../../models/model';
import { ItemService } from '../../services/item.service';
import { Breadcrumb } from '../breadcrumb/breadcrumb';

export default function Results() {

    const [ q ] = useSearchParams();
    const [items, setItems] = useState([] as Item[]);
    const [ categories, setCategories ] = useState({} as Category);
  
    useEffect(() => { 
        const query:string = q.get("search") ? String(q.get("search")) : 'zapatilla';
        ItemService.search(query)
            .then((res) => {
                setItems(res?.data?.items || []);
                let filters = res?.data?.filters[0] as Category;
                setCategories(filters);
            })
            .catch((error)=> console.error(error))

    },[q, items, categories]);

    return ( 
        <>
            <Breadcrumb category={categories} />
            <div className="itemList">
                {items.map((item, index) => (
                    <Link to={'/items/' + item.id} key={item.id+index} className="itemList__item">
                        <img src={item.thumbnail} alt={item.title} />
                        <div>
                            <span>$ {item.price}</span>
                            <p>{item.title}</p>
                        </div>
                        <span>{item.seller_address.state.name}</span>
                    </Link>
            ))}   
            </div>
        </>
    );
};

