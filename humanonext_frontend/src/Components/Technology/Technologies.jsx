// import React from "react"
// import { techData } from "./techData"
// import "./Technologies.css"

// const Technology = () =>{
//     const categories = Object.keys(techData);
    
//     return (
//         <>
//             <div>
//                 <div>
//                     <h1>Technologies and Platforms We Use</h1>
//                 </div>
//                 <div>
//                     <div className="categories-container">
//                         <div className="row ">
//                             {categories.map(category => (
//                             <div key={category} className="explore-tabs ">
//                                 <button >{category}</button>                    
//                             </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div>
//                         Technology
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Technology





// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Tabs, { tabsClasses } from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import "./Technologies.css"
// import { techData } from "./techData"

// export const ScrollableTabsButtonVisible = () => {
//   const [value, setValue] = useState(0);

//   const categories = Object.keys(techData);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box
//       sx={{
//         flexGrow: 1,
//         maxWidth: { xs: 320, sm: 480 },
//         bgcolor: 'background.paper',
//       }}
//     >
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         variant="scrollable"
//         scrollButtons
//         aria-label="visible arrows tabs example"
//         sx={{
//           [`& .${tabsClasses.scrollButtons}`]: {
//             '&.Mui-disabled': { opacity: 0.3 },
//           },
//         }}
//       >
        
//         {categories.map(category => (
//             <div key={category} className=" ">
//                 <Tab label={category} />                    
//             </div>
//         ))}
//       </Tabs>
//     </Box>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { techData } from './techData'; // Replace './yourFilePath' with the actual path to your JS file

export default function ScrollableTabsButtonVisible() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Get an array of category names from techData
  const categories = Object.keys(techData);

    const getTechData = (index) => {
        if (categories[index]) {
        return techData[categories[index]];
        }
        return [];
    };

  return (
    <Box
      sx={{
        // flexGrow: 1,
        // maxWidth: { xs: 320, sm: 480 },
        display: 'flex',
        justifyContent: 'center', // Center align horizontally
        alignItems: 'center', // Center align vertically
        // height: '100vh',
        width: "100vw",
        bgcolor: 'background.paper',
      }}
    >
    <Box sx={{ maxWidth: { xs: 320, sm: 400 }}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        {/* Render dynamic Tabs based on categories */}
        {categories.map((category, index) => (
          <Tab key={index} label={category} />
        ))}
      </Tabs>


      <Box sx={{ mt: 2 }}>
          {getTechData(value).map((tech, index) => (
            <div key={index}>
              <h3>{tech.title}</h3>
              <img src={tech.image} alt={tech.title} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
