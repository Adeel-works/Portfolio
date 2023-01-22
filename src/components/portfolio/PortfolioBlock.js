import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} padding={10} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} alignItems="center"   src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem',marginTop:20}}>{title}</h1>
         <p style={{fontSize: '1rem',minHeight:120,marginTop:20}}>{props?.desc}</p>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
            </Box>
            {/* <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box> */}
         </Box>
      </Box>
   );
}

export default PortfolioBlock;