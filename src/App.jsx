

import { Outlet, Route, Routes } from 'react-router'
import SelectSkip from './pages/SelectSkip'
import Payment from './pages/Payment'
import WasteType from './pages/WasteType'
import PermitCheck from './pages/PermitCheck'
import ChooseDate from './pages/ChooseDate'
import Postcode from './pages/Postcode'

function App() {

  

  return (
    <>
      <div className='pt-10  flex-col sm:flex '>
   
      <StepList />
      
        <main className="p-0 sm:p-6 w-full sm:w-auto mx-0 sm:mx-16 ml-0 sm:ml-[100px] px-0 sm:px-32">
        <Routes>
            <Route path="/" element={<SelectSkip />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/postcode" element={<Postcode />} />
            <Route path="/waste-type" element={<WasteType />} />
            <Route path="/permit-check" element={<PermitCheck />} />
            <Route path="/choose-date" element={<ChooseDate />} />
          </Routes>
      </main>
      </div>
     
    </>
  )
}

export default App
