import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "./input/CustomInput";
import { validationSchemaLogin } from "../util/validationSchema";
import { logInWithEmailAndPassword } from "../../../api/firebase";
import { useLocalization } from "../../../utils/hooks/useLocalization";
import Button from "../../../UI/button/Button";
import classes from "./form.module.scss";

export interface LoginType {
  email: string;
  password: string;
}

const Login = () => {
  const dictionary = useLocalization();
  const formMethods = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchemaLogin),
  });
  const onSubmit = (data: LoginType) => {
    logInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className={classes.wrapForm}>
      <h4 className={classes.title}>{dictionary.navigation.login}</h4>
      <FormProvider {...formMethods}>
        <form
          className={classes.form}
          onSubmit={formMethods.handleSubmit(onSubmit)}
        >
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
          <Button
            type="submit"
            btnStyle={"primary"}
            btnType="rectangle"
            className={classes["submit-btn"]}
          >
            {dictionary.navigation.login}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;
