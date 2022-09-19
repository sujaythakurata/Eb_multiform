import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from '../functions/initialState';
import {
  IForm1,
  IForm2,
  IForm3,
  IForm4,
  IForm5,
  IFormData,
} from '../types/form';

/*
 *form reducer
 *handel all form data
 *@default return reducerSlice
 *@return actions
 */

export const userSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm1: (state, action: PayloadAction<IForm1>) => {
      state.curForm = 0;
      state.formData.form1 = action.payload;
      setLocalStoreData(state.curForm, state.formData);
    },
    addForm2: (state, action: PayloadAction<IForm2>) => {
      state.curForm = 1;
      state.formData.form2 = action.payload;
      setLocalStoreData(state.curForm, state.formData);
    },
    addForm3: (state, action: PayloadAction<IForm3>) => {
      state.curForm = 2;
      state.formData.form3 = action.payload;
      setLocalStoreData(state.curForm, state.formData);
    },
    addForm4: (state, action: PayloadAction<IForm4>) => {
      state.curForm = 3;
      state.formData.form4 = action.payload;
      setLocalStoreData(state.curForm, state.formData);
    },
    addForm5: (state, action: PayloadAction<IForm5>) => {
      state.curForm = 4;
      state.formData.form5 = action.payload;
      setLocalStoreData(state.curForm, state.formData);
    },
    addForm: (state, action: PayloadAction<IFormData>) => {
      state.formData = action.payload;
    },
    /*
     *if there is any initial data it will restore it
     *@type formData
     */
    getInitialData: state => {
      const curForm = Number(localStorage.getItem('curForm') ?? -1);
      const formData: IFormData = JSON.parse(
        localStorage.getItem('formData') ?? '{}',
      );
      if (curForm !== -1 && Object.keys(formData).length > 0) {
        state.curForm = curForm;
        state.formData = formData;
      }
    },

    /*
     *set next state form when next button click
     */
    setNextForm: (state, action: PayloadAction<number>) => {
      state.curForm = action.payload;
      setLocalStoreData(state.curForm, state.formData);
    },
  },
});

/*
 *@return void
 *set form data to localstorage
 */
const setLocalStoreData = (curForm: number, formData: IFormData) => {
  localStorage.setItem('formData', JSON.stringify(formData));
  localStorage.setItem('curForm', `${curForm}`);
};

export default userSlice.reducer;

export const {
  addForm1,
  addForm2,
  addForm3,
  addForm4,
  addForm5,
  getInitialData,
  setNextForm,
  addForm,
} = userSlice.actions;
