import { Link } from "react-router-dom";

function CustomerList() {
  return (
    <main>
      <h2>Lista klientów</h2>
      <table className="table-list">
        <thead>
          <tr>
            <th>Imie</th>
            <th>Nazwisko</th>
            <th>Pesel</th>
            <th>Email</th>
            <th>Numer telefonu</th>
            <th>Firma</th>
            <th>NIP</th>
            <th>Akcje</th>
          </tr>
        </thead>

        <tbody>
          {customerList.map((customer) => (
            <tr key={customer._id}>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.pesel}</td>
              <td>{customer.email}</td>
              <td>{customer.phoneNumber}</td>
              <td>{customer.companyName}</td>
              <td>{customer.nip}</td>
              <td>
                <ul className="list-actions">
                  <li>
                    <Link
                      to={`/customer/details/${customer._id}`}
                      className="list-actions-button-details"
                    >
                      Szczegóły
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/customer/edit/${customer._id}`}
                      className="list-actions-button-edit"
                    >
                      Edytuj
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/customer/delete/${customer._id}`}
                      className="list-actions-button-delete"
                      onclick="return confirm('Czy na pewno chcesz usunąć tego klienta?');"
                    >
                      Usuń
                    </Link>
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <Link to={`/customer/add`} className="button-add">
          Dodaj nowego klienta
        </Link>
      </p>
    </main>
  );
}

export default CustomerList;
