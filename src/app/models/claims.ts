export enum ClaimType {
  Hardware = 'Блокирующий',
  Sofware = 'Критический',
  Troubleshooting = 'Значительный',
  Networking = 'Незначительный',
}

export enum StatusType {
  Declined = 'Отклонен',
  New = 'Новый',
  Done = 'Выполнен',
  In_Progres = 'В работе',
}

export interface IClaim {
  id: number;
  title: string;
  created: string;
  type: ClaimType;
  status: StatusType;
  actions: string;
  description: string;
  creator: string;
}

export interface ClaimsState {
  claims?: IClaim[];
  currentClaim?: IClaim;
}

export interface IColumn {
  title: string;
  type?: string;
}

export enum ActionTypes {
  REMOVE = 'REMOVE',
  VIEW = 'VIEW',
  EDIT = 'EDIT',
  CREATING = 'CREATING',
  IS_DELETING = 'IS_DELETING',
}
