import { Container } from '@chakra-ui/react';
import { useState } from 'react';
import Dasbor from './Components/Dasbor/Dasbor';
import Login from './Components/Login/Login';


function App() {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = () => {
    setIsLogin((prevState) => {
      return !prevState;
    })
  }
  return (
    <Container bgColor={'blue.600'} p='0' minW={'full'}>
        {!isLogin && <Login onLogin={loginHandler} />}
        <Dasbor />
    </Container>
  );
}

export default App;
