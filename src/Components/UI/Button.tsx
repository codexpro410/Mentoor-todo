import { transFrom } from '@mongez/localization'
import React from 'react'
import { useSelector } from 'react-redux';
import translations from '../../config/localization';
import { RootState } from '../reduxComponents/store';


export default function Button({onClick}:any) {
  const {currentLanguage} = useSelector((state: RootState) => state.todo);
  return (
    <button onClick={onClick}>{transFrom(`${currentLanguage}`, translations.add)}</button>
  )
}
