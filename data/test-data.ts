/*
 *@return Initial state
 *@type IForm
 */

import IForm from '../types/form';

const fakeFormData: IForm = {
  curForm: 0,
  formData: {
    ownerDetails: {
      ownerDesignation: 'mr',
      ownerName: 'sujay thakurata',
      ownerRelation: 'son',
      ownerRelationName: 'sujay thakurata',
      ownerAddress: 'jlkhlh hllkhlh hhhklhlk',
    },
    renterDetails: {
      renterDesgination: 'mr',
      renterName: 'jhjlkhhl lhlhkhlk',
      renterRelation: 'son',
      renterRelationName: 'jhjaal lahflh a',
      renterAddress: 'jlhl hhlkhlafajlkh ',
    },
    agreement: {
      doa: '2022-08-31',
      advanceAmountPaid: 600,
      monthlyRent: 600,
      propertyLocation: 'delhi',
      addressOfProperty: 'jlkhlkhhl hhlkhjkl',
      clauses: 'jlkhlh hlkhhllh',
      propertyDetails: 'ljhlkhhlk hlhlkhlhlh',
    },
    mailingDetails: {
      stampDutyAmount: 400,
      notarySeal: 'yes',
      code: '',
      paidBy: '1st party',
      delivery: 'courier',
    },
    deliveryDetails: {
      postal: 'post',
      contactName: 'sujay thakurata',
      contactNumber: '6289657006',
      email: 'sujaythakurata@test.com',
      mailingAddress: 'kljkljkhl hlhlkhlhlhl',
      pincode: '123456',
    },
  },
};

export default fakeFormData;
