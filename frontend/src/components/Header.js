import Link from "./Link";

function Header (){
      const links = [
            {label: 'Home', path: '/'},
            {label: 'AbotUs', path: '/aboutUsPage'},
            {label: 'Contacts', path: '/aontactsPage'},
            {label: 'Prices', path: '/pricesPage'},
            {label: 'LogIn', path: '/logInPage'},
      ];

      const renderedLinks = links.map((link) => {
            return <Link
                        key={link.label}
                        to={link.path}
                        className='bg-gray-100'
                        activeClassName='font-bold border-4 border-gray-500 pl-2'
                  >
                  </Link>
      })
      return (
            <div className="sticky top-0">       
                  <nav>
                        <span>menu</span>
                        <a href="#" class="logo">
                              <img src="../../public/Dog & Cat.svg" alt="logo"/><h2>VET CLINIC</h2>
                        </a>
                        <div className="">
                              {renderedLinks}
                        </div>
                  </nav> 
            </div>
      )
}
export default Header;