import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { techData } from './techData'; // Replace './yourFilePath' with the actual path to your JS file

export default function Test1() {
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
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '100vh',
        bgcolor: 'background.paper',
        p: 2,
      }}
    >
      <Box sx={{ maxWidth: 800, width: '100%' }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          {/* Render dynamic Tabs based on categories */}
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>
        {/* Display tab content */}
        <Box sx={{ ml: 2 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {/* Render tech data in two columns */}
            {techData[categories[value]].map((tech, index) => (
              <div key={index}>
                <h3>{tech.title}</h3>
                <img src={tech.image} alt={tech.title} style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
