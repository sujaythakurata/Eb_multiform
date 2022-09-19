/*
 *Form data
 *multistep form total 5 forms
 */
export interface IForm1 {
  ownerDesignation: string;
  ownerName: string;
  ownerRelation: string;
  ownerRelationName: string;
  ownerAddress: string;
}
export interface IForm2 {
  renterDesgination: string;
  renterName: string;
  renterRealtion: string;
  renterRelationName: string;
  renterAddress: string;
}
export interface IForm3 {
  doa: string;
  advanceAmountPaid: number;
  monthlyRent: number;
  propertyLocation: string;
  addressOfProperty: string;
  clauses: string;
  propertyDetails: string;
}
export interface IForm4 {
  stampDutyAmount: number;
  notarySeal: string;
  code: string;
  paidBy: string;
  delivery: string;
}
export interface IForm5 {
  postal: string;
  contactName: string;
  contactNumber: string;
  email: string;
  mailingAddress: string;
  pincode: string;
}
export interface IFormData {
  form1: IForm1;
  form2: IForm2;
  form3: IForm3;
  form4: IForm4;
  form5: IForm5;
}

interface IForm {
  curForm: number;
  formData: IFormData;
}

export default IForm;
