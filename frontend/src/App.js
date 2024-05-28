import Link from './components/Link';
import Route from './components/Route';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';

function App() {
      return <div>
            <Link to="/buttonPage">Go to Button page</Link>
            <Link to="/dropdownPage">Go to Dropdown page</Link>
            <div>
                  <Route path='/buttonPage'>
                        <ButtonPage/>
                  </Route>
                  <Route path="/dropdownPage">
                        <DropdownPage/>
                  </Route>
            </div>
      </div>
}
export default App;
