import Route from './components/Route';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import PricesPage from './pages/PricesPage';
import SignInPage from './pages/SignInPage';
import AboutUsPage from './pages/AboutUsPage';
import SignUpPage from './pages/SignUpPage';

function App() {
      return (<div>
                  <div>
                        <Header/>
                        <div>
                              <Route path='/'><HomePage/></Route>
                              <Route path='/aboutUsPage'><AboutUsPage/></Route>
                              <Route path='/contactsPage'><ContactsPage/></Route>
                              <Route path='/pricesPage'><PricesPage/></Route>
                              <Route path='/signInPage'><SignInPage/></Route>
                              <Route path='/signUpPage'><SignUpPage/></Route>
                        </div>
                  </div>
      </div>)
}
export default App;
// className="container flex-no-wrap relative flex w-full items-center justify-between py-2"
/* <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>  
<Sidebar/>  
<div className='col-span-5'>
      <Route path='/buttonPage'><ButtonPage/></Route>
      <Route path="/"><DropdownPage/></Route>
      <Route path='/modalPage'><ModalPage/></Route>
      <Route path='/tablePage'><TablePage/></Route>
</div>
</div>    
// import Sidebar from './components/Sidebar';
// import ButtonPage from './pages/ButtonPage';
// import DropdownPage from './pages/DropdownPage';
// import ModalPage from './pages/ModalPage';
// import TablePage from './pages/TablePage';
*/