
import HeroSection from '../components/heroSection/HeroSection'
import About from '../components/About'
import TectStack from '../components/TectStack'
import PortfolioSection from '../components/PortfolioSection'
import ProjectCard from '../components/ProjectCard'
import ContactSection from '../components/ContactSection'
import ResumeSection from '../components/ResumeSection'




function Home() {

  return (
    <div
      className=" bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('https://timbaker.me/assets/svg/striped-background.svg')" }}
    >
      <div className="flex min-h-full w-full container  mx-auto grow flex-col item-start overflow-hidden border border-stone-900 bg-[#1d202a] shadow-strong sm:rounded-3xl">
        <HeroSection />
        <div>
          <About />
          <TectStack />
          <PortfolioSection />
          <ResumeSection />
          <ProjectCard />
          <ContactSection />

        </div>
      </div>
    </div>
  )
}

export default Home