import React from "react";
import { Link, useParams } from "react-router-dom";
import { getCustomerByIdApicall } from "../../apiCalls/customerApiCalls";
import { getFormattedDate } from "../../helpers/dateHelper";

function CustomerDetails() {
  let { customerId } = useParams();
  customerId = parseInt(customerId);
  const customer = getCustomerByIdApicall(customerId);
  return (
    <main>
      <h2>Szczegóły klienta</h2>
      <p>Imię: {customer.firstName}</p>
      <p>Nazwisko: {customer.lastName}</p>
      <p>Pesel: {customer.pesel}</p>
      <p>E-mail: {customer.email}</p>
      <p>Numer telefonu: {customer.phoneNumber}</p>
      <p>Firma: {customer.companyName}</p>
      <p>NIP: {customer.nip}</p>
      <h2>Szczególy rezerwacji</h2>
      <table className="table-list">
        <thead>
          <tr>
            <th>Samochód</th>
            <th>DataOd</th>
            <th>DataDo</th>
          </tr>
        </thead>
        <tbody>
          {customer.reservation.map((reservation) => (
            <tr key={reservation._id}>
              <td>
                {reservation.car.brandName} + ' ' + {reservation.car.model}
              </td>
              <td>
                {reservation.dateFrom
                  ? getFormattedDate(reservation.dateFrom)
                  : ""}
              </td>
              <td>
                {reservation.dateTo ? getFormattedDate(reservation.dateTo) : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="section-buttons">
        <Link to="/customer" className="button-back">
          Powrót
        </Link>
      </div>
    </main>
  );
}

export default CustomerDetails;
