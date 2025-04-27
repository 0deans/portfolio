import { Layout } from './components/layout'
import {
  AboutSection,
  ContactSection,
  EducationSection,
  HeroSection,
  ProjectsSection,
  SkillsSection
} from './components/sections'

const App = () => {
  return (
    <Layout>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />

      <div className="mt-18 grid grid-cols-1 gap-18 md:grid-cols-2 md:gap-10">
        <SkillsSection />
        <EducationSection />
      </div>

      <ContactSection />
    </Layout>
  )
}

export default App
