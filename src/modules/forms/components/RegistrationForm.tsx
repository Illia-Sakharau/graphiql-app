import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemaRegistration } from "../util/validationSchema";
import CustomInput from "./input/CustomInput";
import { registerWithEmailAndPassword } from "../../../api/firebase";
import { useLocalization } from "../../../utils/hooks/useLocalization";
import classes from "./form.module.scss";
import Button from "../../../UI/button/Button";

export interface RegistrationType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Registration = () => {
  const dictionary = useLocalization();
  const formMethods = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchemaRegistration),
  });
  const onSubmit = (data: RegistrationType) => {
    registerWithEmailAndPassword(data.name, data.email, data.password);
  };
  return (
    <div className={classes.wrapForm}>
      <h4 className={classes.title}>{dictionary.navigation.registration}</h4>
      <FormProvider {...formMethods}>
        <form
          className={classes.form}
          onSubmit={formMethods.handleSubmit(onSubmit)}
        >
          <CustomInput
            label={dictionary.forms.name}
            name="name"
            type={"text"}
          />
          <CustomInput
            label={dictionary.forms.email}
            name="email"
            type={"email"}
          />
          <CustomInput
            label={dictionary.forms.password}
            name="password"
            type={"password"}
          />
          <CustomInput
            label={dictionary.forms.confirmPassword}
            name="confirmPassword"
            type={"password"}
          />
          <Button
            type="submit"
            btnStyle={"primary"}
            btnType="rectangle"
            className={classes["submit-btn"]}
          >
            {dictionary.navigation.registration}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Registration;
