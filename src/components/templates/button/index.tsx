import { useState, useRef } from 'react';
import styles from './style.module.scss';
import ButtonComponent from '../../atoms/button';
import { buttonType } from '../../../enum';

const ButtonTemplateComponent = () => {
  const [value, setValue] = useState('')
  const textarea = useRef<HTMLTextAreaElement>(null)

  return (
    <div className={styles.box}>
      <div className={styles.row}>
        <ButtonComponent
          label='XLARGE_LOW'
          type={buttonType.XLARGE_LOW}
          onClick={() => {
            setValue(`<ButtonComponent label='XLARGE_LOW' type={buttonType.XLARGE_LOW} onClick={() => {}} />`)
          }} />
        <ButtonComponent
          label='XLARGE_MIDDLE'
          type={buttonType.XLARGE_MIDDLE}
          onClick={() => {
            setValue(`<ButtonComponent label='XLARGE_MIDDLE' type={buttonType.XLARGE_MIDDLE} onClick={() => {}} />`)
          }} />
        <ButtonComponent
          label='XLARGE_HIGH'
          type={buttonType.XLARGE_HIGH}
          onClick={() => {
            setValue(`<ButtonComponent label='XLARGE_HIGH' type={buttonType.XLARGE_HIGH} onClick={() => {}} />`)
          }} />
        <ButtonComponent
          label='XLARGE_MIDDLE_ERROR'
          type={buttonType.XLARGE_MIDDLE_ERROR}
          onClick={() => {
            setValue(`<ButtonComponent label='XLARGE_MIDDLE_ERROR' type={buttonType.XLARGE_MIDDLE_ERROR} onClick={() => {}} />`)
          }} />
        <ButtonComponent
          label='XLARGE_HIGH_ERROR'
          type={buttonType.XLARGE_HIGH_ERROR}
          onClick={() => {
            setValue(`<ButtonComponent label='XLARGE_HIGH_ERROR' type={buttonType.XLARGE_HIGH_ERROR} onClick={() => {}} />`)
          }} />
      </div>
      <div className={styles.row}>
        <ButtonComponent
          label='LARGE_LOW'
          type={buttonType.LARGE_LOW}
          onClick={() => {
            setValue(`<ButtonComponent label='LARGE_LOW' type={buttonType.LARGE_LOW} onClick={() => {}} />`)
          }} />
        <ButtonComponent
          label='LARGE_MIDDLE'
          type={buttonType.LARGE_MIDDLE}
          onClick={() => {
            setValue(`<ButtonComponent label='LARGE_MIDDLE' type={buttonType.LARGE_MIDDLE} onClick={() => {}} />`)
          }} />
        <ButtonComponent
          label='LARGE_HIGH'
          type={buttonType.LARGE_HIGH}
          onClick={() => {
            setValue(`<ButtonComponent label='LARGE_HIGH' type={buttonType.LARGE_HIGH} onClick={() => {}} />`)
          }} />
        <ButtonComponent
          label='LARGE_MIDDLE_ERROR'
          type={buttonType.LARGE_MIDDLE_ERROR}
          onClick={() => {
            setValue(`<ButtonComponent label='LARGE_MIDDLE_ERROR' type={buttonType.LARGE_MIDDLE_ERROR} onClick={() => {}} />`)
          }} />
        <ButtonComponent
          label='LARGE_HIGH_ERROR'
          type={buttonType.LARGE_HIGH_ERROR}
          onClick={() => {
            setValue(`<ButtonComponent label='LARGE_HIGH_ERROR' type={buttonType.LARGE_HIGH_ERROR} onClick={() => {}} />`)
          }} />
      </div>

      <div className={styles.row}>
        <ButtonComponent
          label='MEDIUM_LOW'
          type={buttonType.MEDIUM_LOW}
          onClick={() => {
            setValue(`<ButtonComponent label='MEDIUM_LOW' type={buttonType.MEDIUM_LOW} onClick={() => {}} />`)
          }} />
        <ButtonComponent
          label='MEDIUM_MIDDLE'
          type={buttonType.MEDIUM_MIDDLE}
          onClick={() => {
            setValue(`<ButtonComponent label='MEDIUM_MIDDLE' type={buttonType.MEDIUM_MIDDLE} onClick={() => {}} />`)
          }} />
        <ButtonComponent
          label='MEDIUM_HIGH'
          type={buttonType.MEDIUM_HIGH}
          onClick={() => {
            setValue(`<ButtonComponent label='MEDIUM_HIGH' type={buttonType.MEDIUM_HIGH} onClick={() => {}} />`)
          }} />
        <ButtonComponent
          label='MEDIUM_MIDDLE_ERROR'
          type={buttonType.MEDIUM_MIDDLE_ERROR}
          onClick={() => {
            setValue(`<ButtonComponent label='MEDIUM_MIDDLE_ERROR' type={buttonType.MEDIUM_MIDDLE_ERROR} onClick={() => {}} />`)
          }} />
        <ButtonComponent
          label='MEDIUM_HIGH_ERROR'
          type={buttonType.MEDIUM_HIGH_ERROR}
          onClick={() => {
            setValue(`<ButtonComponent label='MEDIUM_HIGH_ERROR' type={buttonType.MEDIUM_HIGH_ERROR} onClick={() => {}} />`)
          }} />
      </div>

      <div className={styles.row}>
        <ButtonComponent
          label='SMALL_LOW'
          type={buttonType.SMALL_LOW}
          onClick={() => {
            setValue(`<ButtonComponent label='SMALL_LOW' type={buttonType.SMALL_LOW} onClick={() => {}} />`)
          }} />
        <ButtonComponent
          label='SMALL_MIDDLE'
          type={buttonType.SMALL_MIDDLE}
          onClick={() => {
            setValue(`<ButtonComponent label='SMALL_MIDDLE' type={buttonType.SMALL_MIDDLE} onClick={() => {}} />`)
          }} />
        <ButtonComponent
          label='SMALL_HIGH'
          type={buttonType.SMALL_HIGH}
          onClick={() => {
            setValue(`<ButtonComponent label='SMALL_HIGH' type={buttonType.SMALL_HIGH} onClick={() => {}} />`)
          }} />
        <ButtonComponent
          label='SMALL_MIDDLE_ERROR'
          type={buttonType.SMALL_MIDDLE_ERROR}
          onClick={() => {
            setValue(`<ButtonComponent label='SMALL_MIDDLE_ERROR' type={buttonType.SMALL_MIDDLE_ERROR} onClick={() => {}} />`)
          }} />
        <ButtonComponent
          label='SMALL_HIGH_ERROR'
          type={buttonType.SMALL_HIGH_ERROR}
          onClick={() => {
            setValue(`<ButtonComponent label='SMALL_HIGH_ERROR' type={buttonType.SMALL_HIGH_ERROR} onClick={() => {}} />`)
          }} />
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

export default ButtonTemplateComponent;