import Sidebar from './components/Sidebar';
import Route from './components/Route';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
      return (<div>
                  <div className="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
                        <Header/>
                        <div>
                              <Route path='/'><HomePage/></Route>
                        </div>
                  </div>
            
            {/* <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>  
                  <Sidebar/>  
                  <div className='col-span-5'>
                        <Route path='/buttonPage'><ButtonPage/></Route>
                        <Route path="/"><DropdownPage/></Route>
                        <Route path='/modalPage'><ModalPage/></Route>
                        <Route path='/tablePage'><TablePage/></Route>
                  </div>
             </div>     */}
      </div>)
}
export default App;
