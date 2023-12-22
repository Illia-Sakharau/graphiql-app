import style from "./spiner.module.scss";

export const Spiner: React.FC = () => {
  return (
    <div className={style.loader_wrap}>
      <div className={style.loader}></div>
    </div>
  );
};
