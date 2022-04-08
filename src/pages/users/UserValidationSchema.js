import * as Yup from "yup";

const UserValidationSchema = Yup.object({
    first_name: Yup.string()
        .min(2, "short_value")
        .max(50, "long_value")
        .required("required"),
    last_name: Yup.string()
        .min(2, "short_value")
        .max(50, "long_value")
        .required("required"),
    email: Yup.string()
        .email("invalid email")
        .required("required"),
    password: Yup.string()
        .min(6, "short_value")
        .max(15, "long_value")
        .required("required"),
    profile_picture: Yup.string()
        .required("required")
});

export default UserValidationSchema;

