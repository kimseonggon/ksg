import React, { useState, useRef } from 'react';
import styles from './style.module.scss'
import ButtonComponent from '../../atoms/button'
import { buttonType } from '../../../enum';
import InputComponent from '../../atoms/input';

const MoveiTemplateComponent = () => {
  const [value, setValue] = useState('')
  const textarea = useRef<HTMLTextAreaElement>(null)

  return (
    <div className={styles.box}>
      <div className={styles.row}>
        <InputComponent
          label='기본'
          onClick={(e) => {
            setValue(`<InputComponent label='기본' />`)
          }}
        />
        <InputComponent
          label='패스워드'
          password={true}
          onClick={(e) => {
            setValue(`<InputComponent label='패스워드' password={true} />`)
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

export default MoveiTemplateComponent;