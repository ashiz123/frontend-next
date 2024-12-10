
import { FormData, Errors, initialStateError } from "./types";


// Validation function component
const validateForm = (formData: FormData, setError: React.Dispatch<React.SetStateAction<Errors>>) => {
    let valid = true;
    setError(initialStateError);

      // Check for required fields
  Object.keys(formData).forEach((key) => {
    if (!formData[key as keyof FormData]) {
      setError((prev) => ({ ...prev, [key]: `${key} is required` }));
      valid = false;
    }
  });

  // Check if passwords match
  if (formData.password !== formData.confirm_password) {
    setError((prev) => ({ ...prev, confirm_password: "Passwords do not match" }));
    valid = false;
  }

  return valid;




}
 



export default validateForm;