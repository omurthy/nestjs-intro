import * as mongoose from 'mongoose';

export const InvoiceSchema = new mongoose.Model({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    customerId: { type: String, required: true },
    customerName: { type: String, required: true },
    lastPayingDate: { type: Date, required: true }
    kuponCode: { type: String, required: true }
});
export class Invoice extends mongoose.Document {

    id: string;
    productName: string;
    price: number;
    customerId: string;
    customerName: string;
    discount: string;
    lastPayingDate: Date;
    kuponCode: string;

}