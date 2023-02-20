import React from 'react';
import styles from './translateBtn.module.scss';
import TranslateBtnImage from './assets/img/translate.png';
import { useTypedDispatch } from '../../shared/store';
import { toogleLang } from '../../shared/store/slices/peoples';

export const TranslateBtn = () => {
  const dispatch = useTypedDispatch();
  return (
    <button
      type="button"
      className={styles.wrapper}
      onClick={() => dispatch(toogleLang())}
    >
      <img src={TranslateBtnImage} alt="translate" />
    </button>
  );
};
