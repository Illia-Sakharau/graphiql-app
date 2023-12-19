import Button from "../../../../UI/button/Button";
import classes from "./style.module.scss";
import { FC, ReactElement, useEffect, useState } from "react";
import { SwitchContentProps } from "../../types/components";
import EndpointsContent from "../endpointsContent/EndpointsContent";
import DocsContent from "../docsContent/DocsContent";
import ApiContent from "../apiContent/ApiContent";

import ApiIcon from "../../../../assets/icons/api.svg?react";
import BookIcon from "../../../../assets/icons/book.svg?react";
import EndpointIcon from "../../../../assets/icons/endpoint.svg?react";

type Props = {
  switchContent: (propps: SwitchContentProps) => void;
  isContentOpen: boolean;
};

const Bar: FC<Props> = ({ switchContent, isContentOpen }): ReactElement => {
  const [isApiActive, setIsApiActive] = useState(false);
  const [isDocsActive, setIsDocsActive] = useState(false);
  const [isEndpointsActive, setIsEndpointsActive] = useState(false);

  const swithOffAllAside = () => {
    setIsApiActive(false);
    setIsDocsActive(false);
    setIsEndpointsActive(false);
  };

  const handleApiClick = () => {
    switchContent({
      isOpen: !isApiActive,
      title: "API",
      content: <ApiContent />,
    });
    swithOffAllAside();
    setIsApiActive(!isApiActive);
  };

  const handleDocsClick = () => {
    switchContent({
      isOpen: !isDocsActive,
      title: "Docs",
      content: <DocsContent />,
    });
    swithOffAllAside();
    setIsDocsActive(!isDocsActive);
  };

  const handleEndpointsClick = () => {
    switchContent({
      isOpen: !isEndpointsActive,
      title: "Endpoints",
      content: <EndpointsContent />,
    });
    swithOffAllAside();
    setIsEndpointsActive(!isEndpointsActive);
  };

  useEffect(() => {
    if (!isContentOpen) {
      swithOffAllAside();
    }
  }, [isContentOpen]);

  return (
    <div className={classes.bar}>
      <Button
        btnStyle={"onWhite"}
        btnType={"round"}
        active={isApiActive}
        onClick={handleApiClick}
      >
        <ApiIcon />
      </Button>
      <div className={classes.devider}></div>
      <Button
        btnStyle={"onWhite"}
        btnType={"round"}
        active={isDocsActive}
        onClick={handleDocsClick}
      >
        <BookIcon />
      </Button>
      <Button
        btnStyle={"onWhite"}
        btnType={"round"}
        active={isEndpointsActive}
        onClick={handleEndpointsClick}
      >
        <EndpointIcon />
      </Button>
    </div>
  );
};

export default Bar;
