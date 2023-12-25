import { Dispatch, FC, ReactElement, SetStateAction } from "react";

import CodeArea from "../codeArea/CodeArea";

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const HeadersContent: FC<Props> = ({ value, setValue }): ReactElement => {
  return <CodeArea value={value} setValue={setValue} />;
};

export default HeadersContent;
