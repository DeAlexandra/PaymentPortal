import * as Yup from "yup";

export const TransactionValidationSchema = Yup.object({
    receiver: Yup.string().required("required"),
    price: Yup.number().required("required"),
    VAT: Yup.number().required("required"),
    products: Yup.array()
});

export default TransactionValidationSchema;