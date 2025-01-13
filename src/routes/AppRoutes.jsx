import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'
import ElBuenSabor from '../pages/ElBuenSabor'
import Layout from '../layouts/Layout'
import SpotifyClone from '../pages/SpotifyClone'

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
        <Route
          path="/projects/spotify-clone/"
          element={
            <Layout>
              <SpotifyClone />
            </Layout>
          }
        />
      </Routes>
    </>
  )
}

export default AppRoutes
