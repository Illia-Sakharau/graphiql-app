import { DeveloperInfo } from "../../types";
import classes from "./style.module.scss";
import { FC, ReactElement } from "react";

const DeveloperCard: FC<DeveloperInfo> = ({
  name,
  position,
  description,
  photoURL,
}): ReactElement => {
  return (
    <div className={classes.card}>
      <div className={classes["img-wrapper"]}>
        <img src={photoURL} alt={`Photo ${name}`} />
      </div>
      <h4>{name}</h4>
      <h6>{position}</h6>
      <p>{description}</p>
    </div>
  );
};

export default DeveloperCard;
