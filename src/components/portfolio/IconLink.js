import React from 'react';

function IconLink(props) {
   const {link, title, icon} = props;
   return (
      <a onClick={(e)=>{
         if(!link || link==""){
            e.preventDefault()
         }
      }} href={link} target={"_blank"} rel="noopener noreferrer">
         <i style={{fontSize:'28px'}} className={icon}/> {title}
      </a>
   );
}

export default IconLink;