import { customerList, customerDetails } from "./customerApiMockData";

export function getCustomersApiCall() {
  return customerList;
}

export function getCustomerByIdApicall(customerId) {
  const customer = customerDetails.find(
    (customer) => customer._id === customerId
  );
  return customer;
}
