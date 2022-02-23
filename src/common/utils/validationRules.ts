import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Le nom est requis";
  }
  if (!values.email) {
    errors.email = "Adresse e-mail est nécessaire";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Adresse email invalide";
  }
  if (!values.message) {
    errors.message = "Un message est requis";
  }
  return errors;
}
