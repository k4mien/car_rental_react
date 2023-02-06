import Header from "./components/fragments/Header";
import Footer from "./components/fragments/Footer";
import { Routes, Route } from "react-router-dom";
import MainContent from "./components/other/MainContent";
import CustomerList from "./components/customer/CustomerList";
import CustomerDetails from "./components/customer/CustomerDetails";
import CustomerForm from "./components/customer/CustomerForm";

function App() {
  var cors = require("cors");
  App.use(cors());
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
