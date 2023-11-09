/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AllBooks from './AllBooks';

function BookCategoriesTab(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="BookCategoriesTab"
      hidden={value !== index}
      id={`vertical-BookCategoriesTab-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

BookCategoriesTab.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-BookCategoriesTab-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 'auto',
        alignItems: "left"
      }}
    >
      <Tabs

        className=" w-[350px] text-right items-start bg-slate-50 shadow-xl"
        orientation="vertical"
        value={value}
        onChange={handleChange}
      >
        <Tab label="All Books" {...a11yProps(0)} style={{ textAlign: 'left' }}/>
        <Tab label="Fiction" {...a11yProps(1)} style={{ textAlign: 'left' }}/>
        <Tab label="Non-Fiction" {...a11yProps(2)} style={{ textAlign: 'left' }}/>
        <Tab label="Novel" {...a11yProps(3)} style={{ textAlign: 'left' }}/>
        <Tab label="Romance" {...a11yProps(4)} style={{ textAlign: 'left' }}/>
        <Tab label="Biography" {...a11yProps(5)} style={{ textAlign: 'left' }}/>
        <Tab label="Children's Books" {...a11yProps(6)} style={{ textAlign: 'left' }}/>
        <Tab label="Autobiography" {...a11yProps(7)} style={{ textAlign: 'left' }}/>
        <Tab label="Mystery" {...a11yProps(8)} style={{ textAlign: 'left' }}/>
      </Tabs>
      <BookCategoriesTab value={value} index={0}>
        <AllBooks />
      </BookCategoriesTab>
      <BookCategoriesTab value={value} index={1}>
        Fiction
      </BookCategoriesTab>
      <BookCategoriesTab value={value} index={2}>
        Non-Fiction
      </BookCategoriesTab>
      <BookCategoriesTab value={value} index={3}>
        Novel
      </BookCategoriesTab>
      <BookCategoriesTab value={value} index={4}>
        Romance
      </BookCategoriesTab>
      <BookCategoriesTab value={value} index={5}>
        Biography
      </BookCategoriesTab>
      <BookCategoriesTab value={value} index={6}>
        Children's Books
      </BookCategoriesTab>
      <BookCategoriesTab value={value} index={7}>
        Autobiography
      </BookCategoriesTab>
      <BookCategoriesTab value={value} index={8}>
        Mystery
      </BookCategoriesTab>
    </Box>
  );
}
