import React, { useState, useRef } from 'react';
import styles from './style.module.scss'
import ButtonComponent from '../../atoms/button'
import { buttonType } from '../../../enum';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ButtonPageConponent from './button';

const UIConponent = () => {
  const [tab, setTab] = useState('button');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  return (
    <div className={styles.ui}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="버튼" {...a11yProps(0)} value={'button'} />
          <Tab label="버튼" {...a11yProps(0)} value={'button'} />
          <Tab label="그리드" {...a11yProps(1)} value={'grid'} />
        </Tabs>
      </Box>
      <div className={styles.row}>
        {tab === 'button' && <ButtonPageConponent />}
      </div>

    </div>
  );
};

export default UIConponent;