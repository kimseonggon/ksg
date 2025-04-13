import React, { useState, useRef } from 'react';
import styles from './style.module.scss'
import ButtonComponent from '../../atoms/button'
import { buttonType } from '../../../enum';
import ChartComponent from '../../atoms/chart';

const ChartTemplateComponent = () => {
  const [value, setValue] = useState('')
  const textarea = useRef<HTMLTextAreaElement>(null)

  return (
    <div className={styles.box}>

      <div className={styles.row}>
        <ChartComponent xAxis={{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }}
          yAxis={{
            type: 'value'
          }}
          series={[
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line'
            }
          ]}
          style={{ height: '340px', width: '340px' }}
          onClick={() => {
            setValue(`<ChartComponent xAxis={{
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }}
              yAxis={{
                type: 'value'
              }}
              series={[
                {
                  data: [150, 230, 224, 218, 135, 147, 260],
                  type: 'line'
                }
              ]}
              style={{ height: '340px', width: '340px' }}
            />`
            )
          }}
        />
        <ChartComponent xAxis={{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }}
          yAxis={{
            type: 'value'
          }}
          series={[
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'bar'
            }
          ]}
          style={{ height: '340px', width: '340px' }}
          onClick={() => {
            setValue(`<ChartComponent xAxis={{
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }}
              yAxis={{
                type: 'value'
              }}
              series={[
                {
                  data: [150, 230, 224, 218, 135, 147, 260],
                  type: 'bar'
                }
              ]}
              style={{ height: '340px', width: '340px' }}
              />`
            )
          }}
        />
      </div>

      <div >
        <h4>소스보기</h4>
        <div className={styles.row}>
          <textarea style={{ height: '50px', width: '600px' }} defaultValue={value} ref={textarea} />
          <ButtonComponent
            label='copy'
            type={buttonType.SMALL_LOW}
            onClick={() => {
              if (textarea.current) {
                textarea.current.select()
                document.execCommand('copy')

              }
            }} />
        </div>

      </div>
    </div>
  );
};

export default ChartTemplateComponent;