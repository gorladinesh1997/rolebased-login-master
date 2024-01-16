import react from 'react';
import ApplicationRoutes from './Components/Routes';
import { UserProvider } from './Context';

function App() {
  return (
      <UserProvider>
        <ApplicationRoutes/>
      </UserProvider>
      
      
  );
}

export default App;
