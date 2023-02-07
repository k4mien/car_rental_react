import Header from "./components/fragments/Header";
import Footer from "./components/fragments/Footer";
import { Routes, Route } from "react-router-dom";
import MainContent from "./components/other/MainContent";
import CustomerList from "./components/customer/CustomerList";
import CustomerDetails from "./components/customer/CustomerDetails";
import CustomerForm from "./components/customer/CustomerForm";
import CarList from "./components/car/CarList";
import CarForm from "./components/car/CarForm";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />

        <Route path="customer">
          <Route index={true} element={<CustomerList />} />
          <Route path="details/:customerId" element={<CustomerDetails />} />
          <Route path="add" element={<CustomerForm />} />
          <Route path="edit/:customerId" element={<CustomerForm />} />
        </Route>

        <Route path="car">
          <Route index={true} element={<CarList />} />
          <Route path="add" element={<CarForm />} />
          <Route path="edit/:customerId" element={<CarForm />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
