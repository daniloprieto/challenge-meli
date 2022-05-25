import React from 'react'
import { Category, Path_from_root } from '../../models/model';
import './breadcrumb.scss';

export const Breadcrumb = (props: { category: Category }) => {

  function getTags(): Path_from_root[]  {
    
    let tags: Path_from_root[] = [];

    let values = props.category.values[0]

    tags.push({
      id: values.id,
      name: values.name
    });

    values.path_from_root.map((path) => tags.push(path));

    return tags;
  }
  
  return ( props.category.values &&
    <div className="breadcrumb__div">
      <ul className="breadcrumb__ul">
        {getTags().map((tag, index) => (<a href="#" key={tag.id+index}>{ tag.name }</a> ))}
      </ul>
    </div>
  )
}
