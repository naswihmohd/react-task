
import './App.css';
import ThemeProvider from './ThemeProvider/ThemeProvider';
import UserList from './Componets/UserList'
import UserDetail from './Componets/UserDetail';
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div>
      <ThemeProvider>
        <Routes>

          <Route path='/' element={<UserList />}/>
          <Route path='/details/:id' element={<UserDetail />}/>
          
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
