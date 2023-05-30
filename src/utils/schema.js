import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SUPPORTED_FORMATS = ["jpg", "jpeg", "png"];
const csvFormat = ["csv"];

const MAX_FILE_SIZE = 2 * 1024 * 1024; //100KB

const validFileExtensions = {
  image: ["jpg", "gif", "png", "jpeg", "webp"],
  csvFormat: ["csv"],
  video: ["mp4"],
};

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
  );
}

export const userSchema = Yup.object({
  fullName: Yup.string().required("Please enter full name."),
  email: Yup.string()
    .trim("Email cannot include space(s) at start and end.")
    .strict(true)
    .required("Please enter Email/Phone Number.")
    .matches(emailRegex, "Please enter your valid email"),
  mnumber: Yup.string()
    .trim("Phone number cannot include start and end spaces")
    .strict(true)
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Phone number must be atleast 10 characters long")
    .max(13, "Phone number must be less than 13 characters.")
    .required("Please enter your number."),

  password: Yup.string()
    .trim("Password cannot include start and end spaces")
    .strict(true)
    .required("Please enter password.")
    .min(6, "Password must be atleast 6 characters long."),

  cPassword: Yup.string()
    .required("Please Confirm new password.")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  role: Yup.string().required("Please select role."),
});
