import { carList, carDetailsList } from "./carApiMockData";

export function getCarsApiCall() {
  return carList;
}

export function getCarsByIdApiCall(carId) {
  const car = carDetailsList.find((car) => car._id === carId);
  return car;
}
