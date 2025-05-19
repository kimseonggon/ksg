import styles from './style.module.scss';
import { SpreadSheets } from '@mescius/spread-sheets-react';
import * as GC from '@mescius/spread-sheets';
import '@mescius/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css';
import '@mescius/spread-sheets-resources-ko';

GC.Spread.Sheets.LicenseKey = process.env.REACT_APP_SPREAD_KEY + ''

GC.Spread.Common.CultureManager.culture('ko-kr');

const SpreadTemplateComponent = () => {

  const hostStyle = {
    width: '100%',
    height: '600px',
    border: '1px solid darkgray',
  };

  const initSpread = (spread: GC.Spread.Sheets.Workbook) => {
    const sheet = spread.getActiveSheet();
    sheet
      .getCell(0, 0)
      .vAlign(GC.Spread.Sheets.VerticalAlign.center)
      .value('Hello SpreadJS!');
  };
  return (
    <div className={styles.box}>

      <div style={{ width: "950px", height: "600px" }}>
        <SpreadSheets
          workbookInitialized={(spread) => initSpread(spread)}
          hostStyle={hostStyle}
        ></SpreadSheets>
      </div>
    </div>
  );
};

export default SpreadTemplateComponent;