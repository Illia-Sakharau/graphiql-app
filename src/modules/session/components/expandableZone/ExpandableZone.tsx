import { FC, ReactElement, useState } from "react";

import { ParamsValue } from "../../../../types/graphQuery";
import ExZoneHeader from "../exZoneHeader/ExZoneHeader";
import HeadersContent from "../headersContent/HeadersContent";
import VariablesContent from "../variablesContent/VariablesContent";
import classes from "./style.module.scss";

const ExpandableZone: FC<ParamsValue> = ({
  headers,
  setHeaders,
  variables,
  setVariables,
}): ReactElement => {
  const [isExpande, setIsExpande] = useState(false);
  const [isVariablesActive, setIsVariablesActive] = useState(false);
  const [isHeadersActive, setIsHeadersActive] = useState(false);

  const expendVariables = () => {
    setIsExpande(true);
    setIsHeadersActive(false);
    setIsVariablesActive(true);
  };

  const expendHeaders = () => {
    setIsExpande(true);
    setIsVariablesActive(false);
    setIsHeadersActive(true);
  };

  const switchIsExpande = () => {
    setIsExpande(!isExpande);
    if (!isVariablesActive && !isHeadersActive) {
      setIsVariablesActive(true);
    }
  };

  return (
    <div className={classes.wrapper}>
      <ExZoneHeader
        isVariablesActive={isVariablesActive}
        isHeadersActive={isHeadersActive}
        expendVariables={expendVariables}
        expendHeaders={expendHeaders}
        switchIsExpande={switchIsExpande}
        isExpande={isExpande}
      />
      {isExpande && isHeadersActive && (
        <HeadersContent value={headers} setValue={setHeaders} />
      )}
      {isExpande && isVariablesActive && (
        <VariablesContent value={variables} setValue={setVariables} />
      )}
    </div>
  );
};

export default ExpandableZone;
