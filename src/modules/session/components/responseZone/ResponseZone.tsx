import { FC, ReactElement, useEffect, useState } from "react";

import { ResponseData } from "../../../../types/graphQuery";
import CodeArea from "../codeArea/CodeArea";
import classes from "./style.module.scss";

const ResponseZone: FC<ResponseData> = ({
  data,
  errors,
  statusCode,
}): ReactElement => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (statusCode) {
      statusCode === 200
        ? setValue(JSON.stringify(data, null, 4))
        : setValue(JSON.stringify(errors, null, 4));
    }
  }, [data]);

  return (
    <div className={classes.wrapper}>
      <CodeArea readOnly={true} value={value} />
    </div>
  );
};

export default ResponseZone;
