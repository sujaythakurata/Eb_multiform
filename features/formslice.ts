import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from '../functions/initialState';
import {
  IOwnerDetails,
  IRenterDetails,
  IAgreement,
  IMailingDetails,
  IDeliveryDetails,
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
    addOwnerDetails: (state, action: PayloadAction<IOwnerDetails>) => {
      // state.curForm = 0;
      state.formData.ownerDetails = action.payload;
      setLocalStoreData(state.curForm, state.formData);
    },
    addRenterDetails: (state, action: PayloadAction<IRenterDetails>) => {
      // state.curForm = 1;
      state.formData.renterDetails = action.payload;
      setLocalStoreData(state.curForm, state.formData);
    },
    addAgreement: (state, action: PayloadAction<IAgreement>) => {
      // state.curForm = 2;
      state.formData.agreement = action.payload;
      setLocalStoreData(state.curForm, state.formData);
    },
    addMailingDetails: (state, action: PayloadAction<IMailingDetails>) => {
      // state.curForm = 3;
      state.formData.mailingDetails = action.payload;
      setLocalStoreData(state.curForm, state.formData);
    },
    addDeliveryDetails: (state, action: PayloadAction<IDeliveryDetails>) => {
      // state.curForm = 4;
      state.formData.deliveryDetails = action.payload;
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
  addOwnerDetails,
  addRenterDetails,
  addAgreement,
  addMailingDetails,
  addDeliveryDetails,
  getInitialData,
  setNextForm,
  addForm,
} = userSlice.actions;
