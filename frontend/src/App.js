import Dropdown from "./components/Dropdown";
import ButtonPage from "./pages/ButtonPage";
import { useState } from "react";


function App() {
      const [selection, setSelection] = useState(null);
      const handlSelect = (option) => {
            setSelection(option)
      };
      const options =[
            {label: 'Not spicy', value: 'mild'},
            {label: 'A little spicy', value: 'spicy'},
            {label: 'Realy spicy!', value: 'extra_spicy'},
      ];

      return <Dropdown 
            options={options} 
            value={selection} 
            onChange={handlSelect}
       />
}

export default App;
 //return (<div><ButtonPage/></div>)