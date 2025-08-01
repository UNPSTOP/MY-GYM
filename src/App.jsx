import { useState,createContext } from 'react'
import './App.css'
import Register from './Components/Register'
import Loging from './Components/Loging'
import Newpassord from './Components/Newpassord'
import Forget from './Components/Forget'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TermsOfcondition from './Components/TermsOfcondition'
import Landingpage from './Components/Landingpage'
export const Numbercontext=createContext();
const router=createBrowserRouter([
  {
path:"/",
element:<div >
  <Landingpage/>
</div>
  },
  {
    path:"/Register",
    element: <div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
   
      <Register/>
    </div>
    // 591420
  },
  {
    path:"/loging",
    element: <div>
      
      <Loging/>
    </div>
  },

  {
    path:"/Forget",
    element: <div style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
 
      <Forget/>
    </div>
  },
  {
    path:"/newpassord",
    element: <div>
 
      <Newpassord/>
    </div>
  },
  {
    path:"/termsofcondition",
    element: <div>
 
      <TermsOfcondition/>
    </div>
  },
  {
    path:"*",
    element:<div>
      <h1 style={{color:"red",fontSize:"2rem",fontWeight:"bold"}}>404 page not found</h1>
    </div>
  }
]);

function App() {
  const [number, setNumber] = useState('');
  return (
<Numbercontext.Provider value={{number,setNumber}} >
    <div className='main1'  >
      <RouterProvider
      router={router}
      >

      </RouterProvider>
      
      
    </div>
     </Numbercontext.Provider>
    
  )
}

export default App
