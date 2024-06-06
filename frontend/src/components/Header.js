import Link from "./Link";

function Header (){
      const links = [
            {label: 'Home', path: '/'},
            {label: 'About Us', path: '/aboutUsPage'},
            {label: 'Contacts', path: '/contactsPage'},
            {label: 'Prices', path: '/pricesPage'},
            {label: 'Sign In', path: '/signInPage'},
            {label: 'Sign Up', path: '/signUpPage'},
      ];
      const renderedLinks = links.map((link) => {
            return <Link
                        key={link.label}
                        to={link.path}
                        className='bg-gray-100'
                        activeClassName='font-bold border-4 border-gray-500 pl-2'
                  >
                        {link.label}
                  </Link>
      })
      return (<div className="justify-center space-x-10 items-center">
                  {renderedLinks}
            </div>
      )
}
export default Header;