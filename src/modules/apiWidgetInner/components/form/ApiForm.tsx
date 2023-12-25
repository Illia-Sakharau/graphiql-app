import { FormProvider, useForm } from "react-hook-form";
import { validationSchemaNewApi } from "../../util/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../../../forms/components/input/CustomInput";
import Button from "../../../../UI/button/Button";
import { FC } from "react";
import classes from "./style.module.scss";
import PlusIcon from "../../../../assets/icons/plus.svg?react";
import useAddingApi from "../../hooks/useAddingApi";
import { useLocalization } from "../../../../utils/hooks/useLocalization";

const ApiForm: FC = () => {
  const dictionary = useLocalization().api_widget;
  const validationSchema = validationSchemaNewApi(dictionary);
  const { handleAddNewApi, isLoading } = useAddingApi();
  const formMethods = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  return (
    <FormProvider {...formMethods}>
      <form
        className={classes.form}
        onSubmit={formMethods.handleSubmit(handleAddNewApi)}
      >
        <CustomInput label={"New API"} name={"api"} type={"text"} />
        <Button
          type="submit"
          btnStyle={"primary"}
          btnType={"round"}
          className={classes.button}
          active={isLoading}
        >
          <PlusIcon />
        </Button>
      </form>
    </FormProvider>
  );
};

export default ApiForm;
