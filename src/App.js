import { Provider } from "react-redux"
import store from "./redux/store"
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from "./screen/Header"
import Contacts from './screen/Contacts'
import AddContact from './screen/AddContact'
import EditContact from "./screen/EditContact"



const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/addContact" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;
