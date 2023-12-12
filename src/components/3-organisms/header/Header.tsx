import classes from "./style.module.scss";
import { FC, ReactElement, useEffect, useState } from "react";
import { linkInfo } from "../../../types/components";
import NavBar from "../../2-molecules/navBar/NavBar";
import { NavRoutes } from "../../../utils/router/routes";
import Logo from "../../1-atoms/logo/Logo";
import LanguageSwitcher from "../../2-molecules/languageSwitcher/LanguageSwitcher";
import { useLocalization } from "../../../utils/hooks/useLocalization";
import Button from "../../1-atoms/button/Button";
import ExitIcon from "../../../assets/icons/logout.svg?react";
import MobileMenu from "../mobileMenu/MobileMenu";

type Props = unknown;

const Header: FC<Props> = (): ReactElement => {
  const [isTop, setIsTop] = useState(true);
  const dictionary = useLocalization();
  const isAuth = true; // заменить на идентификатор юзера от Firebase

  const handleLogout = () => {
    // вставить логаут акшен
    console.log("Logout");
  };

  const authorizedUserNav: linkInfo[] = [
    {
      to: NavRoutes.mainPagePath,
      text: dictionary.navigation.home,
    },
    {
      to: NavRoutes.graphiQL,
      text: dictionary.navigation.playground,
    },
  ];
  const anonymNav: linkInfo[] = [
    {
      to: NavRoutes.mainPagePath,
      text: dictionary.navigation.home,
    },
    {
      to: NavRoutes.loginPagePath,
      text: dictionary.navigation.login,
    },
    {
      to: NavRoutes.registrationPagePath,
      text: dictionary.navigation.registration,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentIsTop = window.scrollY === 0;
      console.log(currentIsTop !== isTop);

      if (currentIsTop !== isTop) {
        setIsTop(currentIsTop);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTop]);

  return (
    <header className={`${classes.header} ${isTop && classes["header_top"]}`}>
      <Logo />
      <LanguageSwitcher className={classes.lang} />
      {isAuth ? (
        <>
          <NavBar linksInBar={authorizedUserNav} className={classes.nav} />
          <Button
            btnStyle={"onBlack"}
            btnType="round"
            className={classes["logout-btn"]}
            onClick={handleLogout}
          >
            <ExitIcon />
          </Button>
        </>
      ) : (
        <NavBar linksInBar={anonymNav} className={classes.nav} />
      )}
      <MobileMenu
        authorizedUserNav={authorizedUserNav}
        anonymNav={anonymNav}
        isAuth={isAuth}
        logoutAction={handleLogout}
      />
    </header>
  );
};

export default Header;
