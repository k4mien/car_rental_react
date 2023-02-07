import { Link } from "react-router-dom";

function CarForm() {
  return (
    <main>
      <h2>Nowy samochód</h2>
      <form className="form">
        <label htmlFor="brandName">
          Marka: <span class="symbol-required">*</span>
        </label>
        <input
          type="text"
          name="brandName"
          id="brandName"
          placeholder="np. Seat (2-60 znaków)"
          value=""
          required
        />
        <span id="errorBrandName" class="errors-text"></span>

        <label htmlFor="model">
          Model: <span class="symbol-required">*</span>
        </label>
        <input
          type="text"
          name="model"
          id="model"
          placeholder="np. Ibiza (2-60 znaków)"
          value=""
          required
        />
        <span id="errorModel" class="errors-text"></span>

        <label htmlFor="registration">
          Numer rejestracyjny: <span class="symbol-required">*</span>
        </label>
        <input
          type="text"
          name="registration"
          id="registration"
          placeholder="np. WWA-1112 albo WF-11122"
          value=""
          required
        />
        <span id="errorRegistration" class="errors-text"></span>

        <label for="insurance">
          Ubezpieczenie: <span class="symbol-required">*</span>
        </label>
        <select name="insurance" id="insurance" required>
          <option value="">Wybierz Ubezpieczenie</option>
          <option value="1" label="Tak"></option>
          <option value="0" label="Nie"></option>
        </select>
        <span id="errorInsurance" class="errors-text"></span>

        <label for="inspection">
          Przegląd: <span class="symbol-required">*</span>
        </label>
        <select name="inspection" id="inspection" required>
          <option value="">Wybierz Przeglad</option>
          <option value="1" label="Tak"></option>
          <option value="0" label="Nie"></option>
        </select>
        <span id="errorInspection" class="errors-text"></span>

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

export default CarForm;
