import { FC, ReactElement } from "react";
import { setAPIs } from "../../../../api/firebase";
import Button from "../../../../UI/button/Button";

const ApiContent: FC = (): ReactElement => {
  const handleClick = () => {
    setAPIs([
      "https://rickandmortyapi.com/graphql",
      "https://countries.trevorblades.com",
    ]);
  };

  return (
    <>
      <Button btnStyle={"primary"} btnType={"round"} onClick={handleClick}>
        123
      </Button>
    </>
  );
};

export default ApiContent;
