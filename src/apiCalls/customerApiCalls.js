import { customerList, customerDetailsList } from "./customerApiMockData";

export function getCustomersApiCall() {
  return customerList;
}

export function getCustomerByIdApiCall(customerId) {
  const customer = customerDetailsList.find(
    (customer) => customer._id === customerId
  );
  return customer;
}
