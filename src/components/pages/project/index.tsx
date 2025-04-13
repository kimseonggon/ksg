import React, { useState, useRef } from 'react';
import styles from './style.module.scss'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ButtonTemplateComponent from '../../templates/button';
import InputTemplateComponent from '../../templates/input';
import ChartTemplateComponent from '../../templates/chart';
const UIComponent = () => {
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
          <Tab label="영화 검색" {...a11yProps(0)} value={'movie'} />
          {/* <Tab label="입력" {...a11yProps(1)} value={'input'} />
          <Tab label="차트" {...a11yProps(2)} value={'chart'} /> */}
        </Tabs>
      </Box>
      <div className={styles.row}>
        {tab === 'button' && <ButtonTemplateComponent />}
        {tab === 'input' && <InputTemplateComponent />}
        {tab === 'chart' && <ChartTemplateComponent />}
      </div>

    </div>
  );
};

export default UIComponent;