import{BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import { UseSelector } from 'react-redux';
import spinner from './components/spinner';
import protectedroute from './components/protectedroute';
function App() {
  const {loading}=useSelector(state=> state.alerts)
  return ( 
     <>
      <BrowserRouter>
      {loading ?(<spinner/>
      ):(
      <Routes>
          <Route path='/' element={
<protectedRoute>
<HomePage/>
</protectedRoute>
          }/>
          <Route path='/login'
           element={
            <publicRoute>
              <Login/>
            </publicRoute>
           }/>
          <Route path ='/register'
           element={
         <publicRoute>
          <Register/>
         </publicRoute>

           }/>

        </Routes>

      )}
        
      </BrowserRouter>
     </>
  );
}

export default App;
