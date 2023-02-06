export const customerList = [
  {
    _id: 1,
    firstName: "Jan",
    lastName: "Kowalski",
    pesel: "00111222333",
    email: "kowal@mail.com",
    phoneNumber: "111-222-333",
    companyName: "Microsoft",
    nip: "1234567890",
  },

  {
    _id: 2,
    firstName: "Michał",
    lastName: "Karmowski",
    pesel: "00222333444",
    email: "karmowski@mail.com",
    phoneNumber: "222-333-444",
  },
];

export const customerDetailsList = [
  {
    _id: 1,
    firstName: "Jan",
    lastName: "Kowalski",
    pesel: "00111222333",
    email: "kowal@mail.com",
    phoneNumber: "111-222-333",
    companyName: "Microsoft",
    nip: "1234567890",
    reservations: [
      {
        _id: 1,
        dateFrom: "2022-01-01",
        dateTo: "2023-01-01",
        customer_id: 1,
        car_id: 1,
        car: {
          _id: 1,
          brandName: "Ford",
          model: "Focus",
        },
      },
    ],
  },
];
