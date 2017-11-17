export interface IMCBillPaymentQuery {
  merchantID: string;
  verfykey: string;
  dataPost: {
    merchantID: string;
    amount: number;
    orderid: string;
    name: string;
    email: string;
    mobile: string;
    desc: string;
    cur: string;
    country: string;
    returnurl: string;
    langcode: string;
  }
}
