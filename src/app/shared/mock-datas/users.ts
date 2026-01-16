import { IUser, RollesEnum } from 'app/models';

export const admin: IUser = {
  firstName: 'Иван',
  lastName: 'Иванов',
  login: 'admin',
  password: 'adminpass',
  role: [RollesEnum.ADMIN, RollesEnum.VIEWER],
};

export const user: IUser = {
  firstName: 'Создатель',
  lastName: 'Соколов',
  login: 'user',
  password: 'userpass',
  role: [RollesEnum.CREATOR, RollesEnum.VIEWER],
};

export const viewer: IUser = {
  firstName: 'Просмотр',
  lastName: 'Просмотров',
  login: 'viewer',
  password: 'viewerpass',
  role: [RollesEnum.VIEWER],
};

export const allUsers = [admin, user, viewer];
