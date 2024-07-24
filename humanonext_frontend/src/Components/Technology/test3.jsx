import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { techData } from './techData'; // Replace './yourFilePath' with the actual path to your JS file

export default function Test3() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const categories = Object.keys(techData);

  const itemsToShow = techData[categories[value]].slice(0, 8);

  // Get an array of category names from techData
  
  

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: 'background.paper',
        p: 2,
      }}
    >
      <Box sx={{ maxWidth: '90%', width: '90%', overflowX: 'auto' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="scrollable auto tabs "
          sx={{ minWidth: '100%' }}
        >
          {/* Render dynamic Tabs based on categories */}
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
          
        </Tabs>
        <hr style={{ margin: '0', padding: '0', width: '95%' }}/>
        {/* Display tab content in a single row with 8 columns */}
        {/* <Box sx={{maxWidth: '90%', display: 'grid', flexDirection:'column', gridTemplateColumns: 'repeat(8, 1fr)', gap: 2, mt: 2, justifyContent: 'center',  }}> */}
        <div className='tech-data-container  ' style={containerStyle }>
          {itemsToShow.map((tech, index) => (
            <div key={index} className='tech-item p-4 m-2'>
              <img src={tech.image} alt={tech.title} style={{ maxWidth: 'auto', height: '50px', objectFit: 'cover'  }} />
              <br/><span className=' font-weight-light'>{tech.title}</span>
            </div>
          ))}
          </div>
        {/* </Box> */}
      </Box>
    </Box>
  );
}
