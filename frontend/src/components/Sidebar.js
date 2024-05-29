import Link from "./Link";

function Sidebar (){
      const links = [
            {label: 'Dropdown', path: '/'},
            {label: 'Button', path: '/buttonPage'},
            {label: 'Modal', path: '/modalPage'},
            {label: 'Table', path: '/tablePage'},
      ];

      const renderedLinks = links.map((link) => {
            return <Link 
                        key={link.label} 
                        to={link.path} 
                        className='mb-3'
                        activeClassName="font-bold border-l-4 bodred-blue-500 pl-2"
                  >
                        {link.label}
                  </Link>
      });

      return (
            <div className="sticky top-0 flex flex-col items-start">
                  {renderedLinks}
            </div>
      )
   
}

export default Sidebar;