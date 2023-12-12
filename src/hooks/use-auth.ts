import { useAppSelector } from "./redux-hooks";

export function useAuth() {
  const { isLogged } = useAppSelector((state) => state.user);

  return {
    isLogged,
  };
}
