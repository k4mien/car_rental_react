import { Link } from "react-router-dom";

function CustomerForm() {
  return (
    <main>
      <h2>Nowy klient</h2>
      <form className="form">
        <label htmlFor="firstName">
          Imię: <span class="symbol-required">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="np. Jan (2-60 znaków)"
          value=""
          required
        />
        <span id="errorFirstName" class="errors-text"></span>

        <label htmlFor="lastName">
          Nazwisko: <span class="symbol-required">*</span>
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="np. Kowalski (2-60 znaków)"
          value=""
          required
        />
        <span id="errorLastName" class="errors-text"></span>

        <label htmlFor="pesel">
          Pesel: <span class="symbol-required">*</span>
        </label>
        <input
          type="text"
          name="pesel"
          id="pesel"
          placeholder="np. 00111222333"
          value=""
          required
        />
        <span id="errorPesel" class="errors-text"></span>

        <label htmlFor="email">
          Email: <span class="symbol-required">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="np. kowalski@mail.com"
          value=""
          required
        />
        <span id="errorEmail" class="errors-text"></span>

        <label htmlFor="phoneNumber">
          Numer telefonu: <span class="symbol-required">*</span>
        </label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="np. 111-222-333"
          value=""
          required
        />
        <span id="errorPhoneNumber" class="errors-text"></span>

        <label htmlFor="companyName">Firma: </label>
        <input
          type="text"
          name="companyName"
          placeholder="np. Microsoft"
          id="companyName"
          value=""
        />
        <span id="errorCompanyName" class="errors-text"></span>

        <label htmlFor="nip">NIP: </label>
        <input
          type="text"
          name="nip"
          id="nip"
          placeholder="np. 013456723"
          value=""
        />
        <span id="errorNip" class="errors-text"></span>

        <div className="form-buttons">
          <p id="errorsSummary" className="errors-text"></p>
          <input className="form-button-submit" type="submit" value="Dodaj" />
          <Link to="/customer" className="form-button-cancel">
            Anuluj
          </Link>
        </div>
      </form>
    </main>
  );
}

export default CustomerForm;
