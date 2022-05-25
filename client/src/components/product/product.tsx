import React, { useEffect, useState } from 'react';
import './product.scss';
import { Item, Category } from '../../models/model';
import { ItemService } from '../../services/item.service';
import { Breadcrumb } from '../breadcrumb/breadcrumb';

export const Product = () => {

  const [item, setItem] = useState({} as Item);

  const getMethod = async () => {
    await ItemService.search()
      .then((res) => {

        let data = res.data; 
        setItem(data.item);
        console.log(item);
        console.log('params');
      })
      .catch((error)=> console.error(error))
  }

  useEffect(() => { if(item) getMethod() });
  
  return (item &&
    <>
    <Breadcrumb category={ {} as Category }/>
      <div className='product'>
        <div className='panel'>
          <div className='panel__column'>
            <div className='panel__gallery'>
              <img src={ item.thumbnail } alt={item.title} />
            </div>
            <Data item={ item }/>
          </div>
          <div className='panel__column'>
            <Seller item={item} />
          </div>
        </div>
      </div>
    </>
  )
}

const Data = (props:{item:Item}) => {
  return (
    <div className='data'>
      <h4>Descripción</h4>
      <p></p>
    </div>
  )
}

const Seller = (props: { item: Item }) => {
  
  function checkCondition(condition: string): string {
    return condition === 'new' ? 'Nuevo' : 'Usado'; 
  }

  return (
    <div className='seller'>
      <span>{ checkCondition(props.item.condition) + ' > ' + props.item.sold_quantity} vendidos</span>
      <h4>{ props.item.title }</h4>
      <p>${ props.item.price }</p>
      <button className='btn-accept'>Comprar</button>
    </div>
  )
}
