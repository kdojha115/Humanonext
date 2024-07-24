import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { techData } from './techData'; // Replace './yourFilePath' with the actual path to your JS file

export default function Test2() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Get an array of category names from techData
  const categories = Object.keys(techData);

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
      <Box sx={{ maxWidth: 800, width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="scrollable auto tabs example"
        >
          {/* Render dynamic Tabs based on categories */}
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>
        {/* Display tab content in two columns */}
        <Box sx={{ mt: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {techData[categories[value]].map((tech, index) => (
            <div key={index}>
              <img src={tech.image} alt={tech.title} style={{ maxWidth: '150px', height: '50px' }} />
              <h3>{tech.title}</h3>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
