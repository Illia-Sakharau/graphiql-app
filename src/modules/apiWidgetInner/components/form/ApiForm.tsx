import { FormProvider, useForm } from "react-hook-form";
import { validationSchemaNewApi } from "../../util/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../../../forms/components/input/CustomInput";
import Button from "../../../../UI/button/Button";
import { FC } from "react";
import { apiWidgetType } from "../../../../types/localization";
import classes from "./style.module.scss";
import PlusIcon from "../../../../assets/icons/plus.svg?react";
import useAddingApi from "../../hooks/useAddingApi";

type Props = {
  dictionary: apiWidgetType;
};

const ApiForm: FC<Props> = ({ dictionary }) => {
  const validationSchema = validationSchemaNewApi(dictionary);
  const { handleAddNewApi } = useAddingApi();
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
        >
          <PlusIcon />
        </Button>
      </form>
    </FormProvider>
  );
};

export default ApiForm;
