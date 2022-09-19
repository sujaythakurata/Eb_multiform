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
      state.formData.form1.ownerAddress = action.payload.ownerAddress;
      state.formData.form1.ownerDesignation = action.payload.ownerDesignation;
      state.formData.form1.ownerName = action.payload.ownerName;
      state.formData.form1.ownerRelation = action.payload.ownerRelation;
      state.formData.form1.ownerRelationName = action.payload.ownerRelationName;
      setLocalStoreData(state.curForm, state.formData);
    },
    addForm2: (state, action: PayloadAction<IForm2>) => {
      state.curForm = 1;
      state.formData.form2.renterAddress = action.payload.renterAddress;
      state.formData.form2.renterDesgination = action.payload.renterDesgination;
      state.formData.form2.renterName = action.payload.renterName;
      state.formData.form2.renterRealtion = action.payload.renterRealtion;
      // eslint-disable-next-line prettier/prettier
      state.formData.form2.renterRelationName = action.payload.renterRelationName;
      setLocalStoreData(state.curForm, state.formData);
    },
    addForm3: (state, action: PayloadAction<IForm3>) => {
      state.curForm = 2;
      state.formData.form3.addressOfProperty = action.payload.addressOfProperty;
      state.formData.form3.advanceAmountPaid = action.payload.advanceAmountPaid;
      state.formData.form3.clauses = action.payload.clauses;
      state.formData.form3.doa = action.payload.doa;
      state.formData.form3.monthlyRent = action.payload.monthlyRent;
      state.formData.form3.propertyDetails = action.payload.propertyDetails;
      state.formData.form3.propertyLocation = action.payload.propertyLocation;
      setLocalStoreData(state.curForm, state.formData);
    },
    addForm4: (state, action: PayloadAction<IForm4>) => {
      state.curForm = 3;
      state.formData.form4.code = action.payload.code;
      state.formData.form4.delivery = action.payload.delivery;
      state.formData.form4.notarySeal = action.payload.notarySeal;
      state.formData.form4.paidBy = action.payload.paidBy;
      state.formData.form4.stampDutyAmount = action.payload.stampDutyAmount;
      setLocalStoreData(state.curForm, state.formData);
    },
    addForm5: (state, action: PayloadAction<IForm5>) => {
      state.curForm = 4;
      state.formData.form5.contactName = action.payload.contactName;
      state.formData.form5.contactNumber = action.payload.contactNumber;
      state.formData.form5.email = action.payload.email;
      state.formData.form5.mailingAddress = action.payload.mailingAddress;
      state.formData.form5.pincode = action.payload.pincode;
      state.formData.form5.postal = action.payload.postal;
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
