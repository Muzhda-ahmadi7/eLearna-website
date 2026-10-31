import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import HomeOne from './pages/HomeOne'
import CourseThree from './pages/CourseThree'
import PricingThree from './pages/PricingThree'
import BlogThree from './pages/BlogThree'
import ContactThree from './pages/ContactThree'
import CourseDetails from './pages/CourseDetails'
import BlogDetails from './pages/BlogDetails'
import Team from './pages/Team'
import InstructorDetails from './pages/InstructorDetails'
import Events from './pages/Events'
import Career from './pages/Career'
import Faq from './pages/Faq'
import About from './pages/About'
import License from './pages/License'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomeOne />} />
        <Route path="/home-one" element={<HomeOne />} />
        <Route path="/course-three" element={<CourseThree />} />
        <Route path="/pricing-three" element={<PricingThree />} />
        <Route path="/blog-three" element={<BlogThree />} />
        <Route path="/contact-three" element={<ContactThree />} />
        <Route path="/course/:slug" element={<CourseDetails />} />
        <Route path="/blog-posts/:slug" element={<BlogDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-members/:slug" element={<InstructorDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/career" element={<Career />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/information/license" element={<License />} />
        <Route path="/not-found-demo" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
