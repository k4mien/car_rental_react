import { Link } from "react-router-dom";
import { getCarsApiCall } from "../../apiCalls/carApiCalls";

function CarList() {
  const carList = getCarsApiCall();
  return (
    <main>
      <h2>Lista samochodów</h2>
      <table className="table-list">
        <thead>
          <tr>
            <th>Marka</th>
            <th>Model</th>
            <th>Numer rejestracyjny</th>
            <th>Ubezpieczenie</th>
            <th>Przegląd</th>
            <th>Opis</th>
            <th>Akcje</th>
          </tr>
        </thead>

        <tbody>
          {carList.map((car) => (
            <tr key={car._id}>
              <td>{car.brandName}</td>
              <td>{car.model}</td>
              <td>{car.registration}</td>
              <td>{car.insurance}</td>
              <td>{car.inspection}</td>
              <td>{car.description}</td>
              <td>
                <ul className="list-actions">
                  <li>
                    <Link
                      to={`/car/details/${car._id}`}
                      className="list-actions-button-details"
                    >
                      Szczegóły
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/car/edit/${car._id}`}
                      className="list-actions-button-edit"
                    >
                      Edytuj
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/car/delete/${car._id}`}
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
        <Link to={`/car/add`} className="button-add">
          Dodaj nowy samochód
        </Link>
      </p>
    </main>
  );
}

export default CarList;
