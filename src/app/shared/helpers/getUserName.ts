import { allUsers } from '../mock-datas';

export const getUserName = (login: string) => {
  const currUser = allUsers.find((el) => el.login === login);

  return currUser ? `${currUser?.lastName} ${currUser?.firstName[0]}` : login;
};
