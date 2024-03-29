import { FC } from 'react'
import React from 'react'

interface ICategoryBanner{
    category:string | string[] | undefined
}

const CategoryBanner:FC<ICategoryBanner> = ({category}) =>
 {

    const cat =  category ? category[0]?.replaceAll('-',' ') : ''
    
  return (
    <div className='"bg-app-blue app-banner -mt-4 p-5 pl-20 m-0 bg-[url("/category-bg.png")] '>
        <p className='app-texto-1  pb-7 text-white pl-[5em]'>Home / {cat} </p>
        <h1 className='app-title-1 pl-[1.5em] text-app-yellow pb-4'>
            {cat}
        </h1>
        <p className='app-texto-1 pb-7 text-white pl-[5em]'>Descubre las {cat} que la gente quiere cerca </p>
    </div>
  );
};

export default CategoryBanner;
