import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemaRegistration } from "./util/validationSchema";
import CustomInput from "./input/CustomInput";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "./firebase/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { NavRoutes } from "../../utils/router/routes";



export interface RegistrationType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Registration = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const formMethods = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchemaRegistration),
  });
  useEffect(() => {
    if (user) navigate(NavRoutes.graphiQL);;
  }, [navigate, user]);

  const onSubmit = (data: RegistrationType) => {
    console.log(auth)
    registerWithEmailAndPassword(data.name, data.email, data.password)
  }

  return (
    <>
      <h2>Registration</h2>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <CustomInput label="Name" name="name" type={"text"} />
          <CustomInput label="Email" name="email" type={"email"} />
          <CustomInput label="Password" name="password" type={"password"} />
          <CustomInput
            label="Confirm password"
            name="confirmPassword"
            type={"password"}
          />
          <button type="submit">Отправить</button>
        </form>
      </FormProvider>
    </>
  );
};

export default Registration;
