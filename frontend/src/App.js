import Sidebar from './components/Sidebar';
import Route from './components/Route';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';

function App() {
      return (<div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
                <Sidebar/>  
            <div className='col-span-5'>
                  <Route path='/buttonPage'>
                        <ButtonPage/>
                  </Route>
                  <Route path="/">
                        <DropdownPage/>
                  </Route>
                  <Route path='/modalPage'>
                        <ModalPage/>
                  </Route>
                  <Route path='/tablePage'>
                        <TablePage/>
                  </Route>
            </div>
      </div>)
}
export default App;
