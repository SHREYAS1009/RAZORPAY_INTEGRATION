import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Products from './components/Products'
import productsData from './components/data'
import PaymentSuccess from './components/PaymentSuccesss.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
         <Route path="/" element ={<Products products={productsData}/>}
         />

         <Route path="/paymentSuccess" element={<PaymentSuccess/>}/>
      </Routes>
    </Router>
     

      
      
    
  )
}

export default App
