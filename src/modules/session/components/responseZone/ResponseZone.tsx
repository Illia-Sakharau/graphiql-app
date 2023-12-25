import { FC, ReactElement } from "react";

import { ResponseData } from "../../../../types/graphQuery";
import CodeArea from "../codeArea/CodeArea";
import classes from "./style.module.scss";

type Props = {
  value: ResponseData;
};

const ResponseZone: FC<Props> = ({ value }): ReactElement => {
  return (
    <div className={classes.wrapper}>
      <CodeArea readOnly={true} value={JSON.stringify(value.data, null, 1)} />
    </div>
  );
};

export default ResponseZone;
