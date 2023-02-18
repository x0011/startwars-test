/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useTypedDispatch, useTypedSelector } from '../../shared/store';
import { IPerson, removeCurrentPerson } from '../../shared/store/slices/peoples';
import { GenderIcon } from '../gender-icon';
import { Modal } from '../modal';
import { PersonValueRound } from '../person-value-round';
import { Tag } from '../tag';
import { GenderTag } from '../tag/GenderTag';
import styles from './personCard.module.scss';
import { CharacteristicsItem } from './ui/characteristicsItem';

// Вывод характеристик в .descrCard сделан специально без проверки

export const PersonCard: React.FC = () => {
  const { currentPerson } = useTypedSelector((state) => state.peoples);
  const dispatch = useTypedDispatch();

  const closeBtnHandler = () => {
    dispatch(removeCurrentPerson());
  };

  return (currentPerson) ? (
    <Modal>
      <div className={styles.card}>
        <button
          className={styles.closeBtn}
          type="button"
          onClick={closeBtnHandler}
        />
        <div className={styles.gender}>
          <GenderIcon injectStyles={styles.genderIcon} gender={currentPerson.gender} />
          <div className={styles.tags}>
            <GenderTag gender={currentPerson.gender} />
            <Tag text={currentPerson.birth_year} />
          </div>
        </div>
        <div className={styles.description}>
          <h3 className={styles.name}>{currentPerson.name}</h3>
          <div className={styles.descrCard}>
            <p>
              Hair color:
              {' '}
              {currentPerson.hair_color}
            </p>
            <p>
              Skin color:
              {' '}
              {currentPerson.skin_color}
            </p>
            <p>
              Eye color:
              {' '}
              {currentPerson.eye_color}
            </p>
          </div>
          <div className={styles.characteristics}>
            <CharacteristicsItem name="mass" value={currentPerson.mass} />
            <CharacteristicsItem name="height" value={currentPerson.height} />
          </div>
        </div>
      </div>
    </Modal>
  )
    : null;
};
