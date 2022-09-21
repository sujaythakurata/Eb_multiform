/*
 *Form data
 *multistep form total 5 forms
 */
export interface IOwnerDetails {
  ownerDesignation: string;
  ownerName: string;
  ownerRelation: string;
  ownerRelationName: string;
  ownerAddress: string;
}
export interface IRenterDetails {
  renterDesgination: string;
  renterName: string;
  renterRelation: string;
  renterRelationName: string;
  renterAddress: string;
}
export interface IAgreement {
  doa: string;
  advanceAmountPaid: number;
  monthlyRent: number;
  propertyLocation: string;
  addressOfProperty: string;
  clauses: string;
  propertyDetails: string;
}
export interface IMailingDetails {
  stampDutyAmount: number;
  notarySeal: string;
  code: string;
  paidBy: string;
  delivery: string;
}
export interface IDeliveryDetails {
  postal: string;
  contactName: string;
  contactNumber: string;
  email: string;
  mailingAddress: string;
  pincode: string;
}
export interface IFormData {
  ownerDetails: IOwnerDetails;
  renterDetails: IRenterDetails;
  agreement: IAgreement;
  mailingDetails: IMailingDetails;
  deliveryDetails: IDeliveryDetails;
}

interface IForm {
  curForm: number;
  formData: IFormData;
}

export default IForm;
