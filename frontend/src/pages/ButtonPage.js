import Button from '../components/Button'

function ButtonPage(){
      const handleClick = () => {
            console.log('Click!!')
      }
      return (
            <div>
                  <div>
                         <Button success outline rounded className='mb-5, text-green-500' onClick={handleClick}>Click me!</Button>
                  </div>
                  <div>
                        <Button rounded outline>Click me!</Button>
                  </div>
                  <div>
                        <Button warning >Click me!</Button>
                  </div>
                  <div>
                        <Button primary outline rounded >Click me!</Button>
                  </div>
                  <div>
                        <Button danger outline >Click me!</Button>
                  </div>
            </div>);
}

export default ButtonPage;