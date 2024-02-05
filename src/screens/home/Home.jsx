import styles from './Home.module.scss'
import HeroSection from '@/sections/heroSection/HeroSection'
import TeamSection from '@/sections/teamSection/TeamSection'
import OurProfectsSection from '@/sections/ourProfectsSection/OurProfectsSection'
import WorkingProcessSection from '@/sections/workingProcessSection/WorkingProcessSection'
import ServicesSection from '@/sections/servicesSection/ServicesSection'
import FaqSection from '@/sections/faqSection/FaqSection'
import OrderSection from '@/sections/orderSection/OrderSection'


const Home = () => {
    return (
        <div>
            <HeroSection />
            <TeamSection />
            <OurProfectsSection />
            <ServicesSection />
            <FaqSection />
            <WorkingProcessSection />
            <OrderSection />
        </div>
    )
}

export default Home