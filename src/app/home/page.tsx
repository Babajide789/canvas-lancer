import About from "../components/about";
import Feedback from "../components/feedback";
import Hero from "../components/Hero";
import Portfolio from "../components/portfolio";
import Offers from './../components/offers';
import FAQ from './../components/faq';
import Contact from './../components/contact';

export default function Home () {
    return(
        <>
            <Hero/>

            <About/>

            <Offers/>

            <Portfolio/>

            <Feedback/>

            <FAQ/>

            <Contact/>
                   
        </>
    )
}