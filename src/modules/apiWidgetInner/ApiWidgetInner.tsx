import { FC, ReactElement } from "react";
import { useAppSelector } from "../../hooks/redux";
import ApiForm from "./components/form/ApiForm";
import { useLocalization } from "../../utils/hooks/useLocalization";
import classes from "./style.module.scss";

const ApiWidgetInner: FC = (): ReactElement => {
  const { apiList } = useAppSelector((state) => state.apiReducer);
  const dictionary = useLocalization();

  return (
    <section className={classes.inner}>
      <div>
        {apiList.map((api) => (
          <div key={api}>{api}</div>
        ))}
      </div>
      <ApiForm dictionary={dictionary.api_widget} />
    </section>
  );
};

export default ApiWidgetInner;
