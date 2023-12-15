import { motion } from "framer-motion";
import { DeveloperInfo } from "../../types";
import classes from "./style.module.scss";
import { forwardRef } from "react";

export const DeveloperCard = forwardRef<HTMLDivElement, DeveloperInfo>(
  ({ name, position, description, photoURL }, ref) => {
    return (
      <div className={classes.card} ref={ref}>
        <div className={classes["img-wrapper"]}>
          <img src={photoURL} alt={`Photo ${name}`} />
        </div>
        <h4>{name}</h4>
        <h6>{position}</h6>
        <p>{description}</p>
      </div>
    );
  },
);

export const MDeveloperCard = motion(DeveloperCard);
