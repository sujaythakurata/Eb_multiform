/*
 *@return Initial state
 *@type IForm
 */

import IForm from '../types/form';

const initialState: IForm = {
  curForm: 0,
  formData: {
    form1: {
      ownerDesignation: '',
      ownerName: '',
      ownerRelation: '',
      ownerRelationName: '',
      ownerAddress: '',
    },
    form2: {
      renterDesgination: '',
      renterName: '',
      renterRealtion: '',
      renterRelationName: '',
      renterAddress: '',
    },
    form3: {
      doa: '',
      advanceAmountPaid: 0,
      monthlyRent: 0,
      propertyLocation: '',
      addressOfProperty: '',
      clauses: '',
      propertyDetails: '',
    },
    form4: {
      stampDutyAmount: 0,
      notarySeal: '',
      code: '',
      paidBy: '',
      delivery: '',
    },
    form5: {
      postal: '',
      contactName: '',
      contactNumber: '',
      email: '',
      mailingAddress: '',
      pincode: '',
    },
  },
};

export default initialState;
