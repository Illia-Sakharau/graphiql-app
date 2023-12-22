import { FC, ReactElement } from "react";
import { setAPIs } from "../../../../api/firebase";
import Button from "../../../../UI/button/Button";
import { useAppSelector } from "../../../../hooks/redux";

const ApiContent: FC = (): ReactElement => {
  const { apiList } = useAppSelector((state) => state.apiReducer);
  const handleClick = async () => {
    setAPIs(["12", "2.com2"]);
    console.log();
  };

  return (
    <>
      <Button btnStyle={"primary"} btnType={"round"} onClick={handleClick}>
        123
      </Button>
      {apiList.map((api) => (
        <div key={api}>{api}</div>
      ))}
    </>
  );
};

export default ApiContent;
