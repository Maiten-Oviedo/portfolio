import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'
import ElBuenSabor from '../pages/ElBuenSabor'
import Layout from '../layouts/Layout'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Landing />
            </Layout>
          }
        />
        <Route
          path="/projects/el-buen-sabor/"
          element={
            <Layout>
              <ElBuenSabor />
            </Layout>
          }
        />
      </Routes>
    </>
  )
}

export default AppRoutes
