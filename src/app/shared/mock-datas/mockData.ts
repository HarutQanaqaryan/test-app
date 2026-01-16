import { ClaimType, IClaim, StatusType } from 'app/models';

export const mockData: IClaim[] = [
  {
    id: 1,
    title: 'TS-913',
    created: '2023-09-13',
    type: ClaimType.Hardware,
    status: StatusType.Declined,
    actions: 'Actions',
    description:
      '"В модуле выбора модели не отображается список из справочника. \n При добавлении в продукт списка моделей, они не отображаются в форме. Как следствие, нет возможности выбрать нужную модель."',
    creator: 'user',
  },
  {
    id: 2,
    title: 'TS-914',
    created: '2023-09-13',
    type: ClaimType.Hardware,
    status: StatusType.Declined,
    actions: 'Actions',
    description:
      '"В форме заполнения паспортных данных неактивна кнопка "Продолжить". \n После заполнения всех полей валидными значениями кнопка "Продолжить" остается в статусе disabled"',
    creator: 'user',
  },
  {
    id: 3,
    title: 'TS-915',
    created: '2023-09-13',
    type: ClaimType.Hardware,
    status: StatusType.Done,
    actions: 'Actions',
    description:
      '"Заявка NL4587 не проходит проверку на запрет операций. \n Заявка заполнена данными не соответсвующими "черным спискам", но при этом при отправке на проверку возвращается сообщение "Проверка не пройдена. Операция отклонена.""',
    creator: 'user',
  },
  {
    id: 4,
    title: 'TS-916',
    created: '2023-09-13',
    type: ClaimType.Sofware,
    status: StatusType.Done,
    actions: 'Actions',
    description:
      '"Не работает основной чекбокс в окне проверок Андеррайтинга. \n На шаге Андеррайтинга нет возможности выделить все проверки в окне проверок. При нажатии на чекбокс "Выбрать всё" проставления остальных чекбоксов не происходит."',
    creator: '',
  },
  {
    id: 5,
    title: 'TS-917',
    created: '2023-09-13',
    type: ClaimType.Sofware,
    status: StatusType.New,
    actions: 'Actions',
    description:
      '"Отсутствуют проверки на максимальное количество символов в поле "Паспорт ТС". \n Допускается ввод любого количества символов или же пустого поля. При этом данные считаются валидными."',
    creator: '',
  },
  {
    id: 6,
    title: 'TS-918',
    created: '2023-09-13',
    type: ClaimType.Troubleshooting,
    status: StatusType.New,
    actions: 'Actions',
    description:
      '"Ошибка 500 при отправке оформленной заявки на регистрацию. \n После заолнения формы и нажатия на кнопку "Отправить" отображается белый экран. В DevTools получаем ответ "500 Internal Server Error""',
    creator: 'user',
  },
];
