export const carList = [
  {
    _id: 1,
    brandName: "Ford",
    model: "Focus",
    registration: "WF-11122",
    inspection: "1",
    insurance: "1",
    description: "Nowy, automatyczna skrzynia biegów, full wyposażenie",
  },

  {
    _id: 2,
    brandName: "Toyota",
    model: "Yaris",
    registration: "WF-22211",
    inspection: "1",
    insurance: "1",
  },
];

export const carDetailsList = [
  {
    _id: 1,
    brandName: "Ford",
    model: "Focus",
    registration: "WF-11122",
    insurance: "1",
    inspection: "1",
    description: "Nowy, automatyczna skrzynia biegów, full wyposażenie",
    reservations: [
      {
        _id: 1,
        customer_id: 1,
        car_id: 1,
        dateFrom: "2022-01-01",
        dateTo: "2023-01-01",
        customer: {
          _id: 1,
          firstName: "Jan",
          lastName: "Kowalski",
          pesel: "00111222333",
          email: "kowal@mail.com",
          phoneNumber: "111-222-333",
          companyName: "Microsoft",
          nip: "1234567890",
        },
      },
    ],
  },

  {
    _id: 2,
    brandName: "Toyota",
    model: "Yaris",
    registration: "WF-22211",
    insurance: "1",
    inspection: "1",
    reservations: [
      {
        _id: 2,
        customer_id: 2,
        car_id: 2,
        dateFrom: "2023-01-01",
        dateTo: "2024-11-01",
        customer: {
          _id: 2,
          firstName: "Michał",
          lastName: "Karmowski",
          pesel: "00222333444",
          email: "karmowski@carmex.com",
          phoneNumber: "211-521-370",
        },
      },
    ],
  },
];
