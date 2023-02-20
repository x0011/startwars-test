/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useTypedSelector } from '../../shared/store';
// eslint-disable-next-line @typescript-eslint/no-unused-expressions

interface ITranslator {
  text?: string
}

// логика перевода взяата из исходников SWAPI:
// https://github.com/phalt/swapi/blob/db826e26650c7a050b4074ba651242ed2a0b2f1b/resources/renderers.py#L44

const lookup = {
  a: 'ra',
  b: 'rh',
  c: 'oa',
  d: 'wa',
  e: 'wo',
  f: 'ww',
  g: 'rr',
  h: 'ac',
  i: 'ah',
  j: 'sh',
  k: 'or',
  l: 'an',
  m: 'sc',
  n: 'wh',
  o: 'oo',
  p: 'ak',
  q: 'rq',
  r: 'rc',
  s: 'c',
  t: 'ao',
  u: 'hu',
  v: 'ho',
  w: 'oh',
  x: 'k',
  y: 'ro',
  z: 'uf',
};

type WookieAlphabet = keyof typeof lookup;

export const toWookie = (text: string | undefined, checkLocale = true) => {
  if (!text) return '';
  const txtArr = text.split('') as WookieAlphabet[];
  const translate = txtArr.map((word) => {
    const toLower = word.toLocaleLowerCase() as WookieAlphabet;
    return lookup[toLower] || word;
  });
  return translate.join('');
};

// eslint-disable-next-line react/jsx-no-useless-fragment
export const Translator: React.FC<ITranslator> = ({ text }) => {
  const { wookie } = useTypedSelector((state) => state.peoples);
  return !wookie ? (
    <>{text}</>
  )
    : <>{toWookie(text)}</>;
};
