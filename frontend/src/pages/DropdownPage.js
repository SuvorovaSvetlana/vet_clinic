import Dropdown from "../components/Dropdown";
import { useState } from "react";


function DropdownPage() {
      const [selection, setSelection] = useState(null);
      const handlSelect = (option) => {
            setSelection(option)
      };
      const options =[
            {label: 'Select owner', value: 'owner'},
            {label: 'Select vet', value: 'vet'},
            {label: 'Select animal', value: 'animal'},
            {label: 'Select vist', value: 'visit'},
      ];

      return <Dropdown 
            options={options} 
            value={selection} 
            onChange={handlSelect}
       />
}

export default DropdownPage;