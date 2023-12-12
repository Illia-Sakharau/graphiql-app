import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemaRegistration } from "./util/validationSchema";
import CustomInput from "./input/CustomInput";
import { registerWithEmailAndPassword } from "./firebase/firebase";


export interface RegistrationType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Registration = () => {
  const formMethods = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchemaRegistration),
  });
  const onSubmit = (data: RegistrationType) => {
    registerWithEmailAndPassword(data.name, data.email, data.password);
  };
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
