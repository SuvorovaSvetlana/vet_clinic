import Link from "./Link";

function Sidebar (){
      const links = [
            {label: 'Vet', path: '/searchVetPage'},
            {label: 'Owner', path: '/searchOwnerPage'},
            {label: 'Vist', path: '/searchVisitPage'},
            {label: 'Animal', path: '/searchAnimalpage'},
      ];

      const renderedLinks = links.map((link) => {
            return <Link 
                        key={link.label} 
                        to={link.path} 
                        className='mb-3 ml-10'
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