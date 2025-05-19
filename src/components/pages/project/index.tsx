import React, { useState } from 'react';
import styles from './style.module.scss';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BookTemplateComponent from '../../templates/book';
import I18nTemplateComponent from '../../templates/i18n';
import I18nGoogleTemplateComponent from '../../templates/i18n_google';
import SpreadTemplateComponent from '../../templates/spread';
import AgGridTemplateComponent from '../../templates/ag_grid';
const ProjectComponent = () => {
  const [tab, setTab] = useState('book');

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
          <Tab label="책 검색" {...a11yProps(0)} value={'book'} />
          <Tab label="번역" {...a11yProps(1)} value={'i18n'} />
          <Tab label="번역(구글시트)" {...a11yProps(1)} value={'i18n_google'} />
          <Tab label="spread" {...a11yProps(2)} value={'spread'} />
          <Tab label="그리드" {...a11yProps(3)} value={'ag_grid'} />
          {/* <Tab label="차트" {...a11yProps(2)} value={'chart'} /> */}
        </Tabs>
      </Box>
      <div className={styles.row}>
        {tab === 'book' && <BookTemplateComponent />}
        {tab === 'i18n' && <I18nTemplateComponent />}
        {tab === 'i18n_google' && <I18nGoogleTemplateComponent />}
        {tab === 'spread' && <SpreadTemplateComponent />}
        {tab === 'ag_grid' && <AgGridTemplateComponent />}
      </div>

    </div>
  );
};

export default ProjectComponent;