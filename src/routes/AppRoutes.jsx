import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing'
import ElBuenSabor from '../pages/ElBuenSabor'
import Layout from '../layouts/Layout'
import SpotifyClone from '../pages/SpotifyClone'
import PersonalPortfolio from '../pages/PersonalPortfolio'
import NineUrban from '../pages/NineUrban'
import PostLayout from '../layouts/PostLayout'
import Blog from '../pages/Blog'

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
          path="/projects/elbuensabor/"
          element={
            <Layout>
              <ElBuenSabor />
            </Layout>
          }
        />
        <Route
          path="/projects/clondespotify/"
          element={
            <Layout>
              <SpotifyClone />
            </Layout>
          }
        />
        <Route
          path="/projects/portfoliopersonal/"
          element={
            <Layout>
              <PersonalPortfolio />
            </Layout>
          }
        />
        <Route
          path="/projects/nineurban/"
          element={
            <Layout>
              <NineUrban />
            </Layout>
          }
        />
        <Route path="/blog/" element={<Blog />} />
        <Route path="/blog/:slug" element={<PostLayout />} />
      </Routes>
    </>
  )
}

export default AppRoutes
