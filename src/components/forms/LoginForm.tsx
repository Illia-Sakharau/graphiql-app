import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "./input/CustomInput";
import { validationSchemaLogin } from "./util/validationSchema";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword } from "./firebase/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { NavRoutes } from "../../utils/router/routes";

export interface LoginType {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  console.log(user)
  useEffect(() => {
    if (user) navigate(NavRoutes.graphiQL);;
  }, [navigate, user]);

  const formMethods = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchemaLogin),
  });
  const onSubmit = (data: LoginType) => {
    logInWithEmailAndPassword(data.email, data.password)
  };

  return (
    <>
      <h2>login</h2>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <CustomInput label="Email" name="email" type={"email"} />
          <CustomInput label="Password" name="password" type={"password"} />
          <button type="submit">Отправить</button>
        </form>
      </FormProvider>
    </>
  );
};

export default Login;
