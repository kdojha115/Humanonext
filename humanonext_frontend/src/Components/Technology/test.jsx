import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { techData } from './techData'; // Replace './yourFilePath' with the actual path to your JS file

export default function Test() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Get an array of category names from techData
  const categories = Object.keys(techData);

  // Function to get tech data (title and image) based on category index
  const getTechData = (index) => {
    if (categories[index]) {
      return techData[categories[index]];
    }
    return [];
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Center align horizontally
        alignItems: 'flex-start', // Align items at the top vertically
        minHeight: '100vh', // Full viewport height
        bgcolor: 'background.paper',
        p: 2, // Padding
      }}
    >
      <Box sx={{ maxWidth: { xs: 320, sm: 960 }, width: '100%' }}>
        <Box sx={{ display: 'flex' }}>
          {/* Tabs column */}
          <Box sx={{ flex: '0 0 30%', paddingRight: 2, borderRight: '1px solid #ccc' }}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="vertical tabs example"
              sx={{
                borderRight: '1px solid #ccc',
                borderBottom: '1px solid #ccc',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
              }}
            >
              {/* Render dynamic Tabs based on categories */}
              {categories.map((category, index) => (
                <Tab key={index} label={category} />
              ))}
            </Tabs>
          </Box>
          {/* Content column */}
          <Box sx={{ flex: '1' }}>
            <Box sx={{ mb: 2 }}>
              <h2>{getTechData(value).length > 0 ? categories[value] : ''}</h2>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {/* Render tech data in two columns */}
              {getTechData(value).map((tech, index) => (
                <div key={index}>
                  <h3>{tech.title}</h3>
                  <img src={tech.image} alt={tech.title} style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
