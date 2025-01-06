import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'
import ElBuenSabor from '../pages/ElBuenSabor'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects/el-buen-sabor/" element={<ElBuenSabor />} />
      </Routes>
    </>
  )
}

export default AppRoutes
