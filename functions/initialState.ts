/*
 *@return Initial state
 *@type IForm
 */

import IForm from '../types/form';

const initialState: IForm = {
  curForm: 0,
  formData: {
    ownerDetails: {
      ownerDesignation: '',
      ownerName: '',
      ownerRelation: '',
      ownerRelationName: '',
      ownerAddress: '',
    },
    renterDetails: {
      renterDesgination: '',
      renterName: '',
      renterRelation: '',
      renterRelationName: '',
      renterAddress: '',
    },
    agreement: {
      doa: '',
      advanceAmountPaid: 0,
      monthlyRent: 0,
      propertyLocation: '',
      addressOfProperty: '',
      clauses: '',
      propertyDetails: '',
    },
    mailingDetails: {
      stampDutyAmount: 0,
      notarySeal: '',
      code: '',
      paidBy: '',
      delivery: '',
    },
    deliveryDetails: {
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
