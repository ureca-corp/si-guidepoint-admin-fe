import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { SessionKey } from "../../common";

type User = {
  accessToken: string;
};

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: SessionKey.User,
  storage: sessionStorage,
});

const userAtom = atom<User>({
  key: SessionKey.User,
  default: { accessToken: "" },
  effects_UNSTABLE: [persistAtom],
});

export const useSessionUser = () => {
  const [user, setUser] = useRecoilState(userAtom);

  const removeUser = () => sessionStorage?.removeItem(SessionKey.User);

  return {
    user,
    setUser,
    removeUser,
  };
};
