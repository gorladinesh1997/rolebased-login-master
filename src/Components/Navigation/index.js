import React from 'react';
import { Menu } from '../../Constants';
import { Link, useLocation } from 'react-router-dom';

const Navigation=()=> {
  const location = useLocation();
  console.log(location.pathname,"pa")
  const handleCLick = (e,path)=> {
    console.log(path,"path")
    if(path === "/login"){
      localStorage.clear();
    }
  }
  return (
    <div className='flex justify-evenly p-4 bg-slate-400'>
    {Menu.map((item,index)=>{
        return <Link onClick={(e)=>handleCLick(e,item.url)} className={`font-bold ${location.pathname === item.url ? "text-purple-900" : "text-white"}`} key={index} to={item.url}>{item.name}</Link>
    })
  }
    </div>
  )
}

export default Navigation;