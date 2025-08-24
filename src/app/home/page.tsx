import About from "../components/about";
import Feedback from "../components/feedback";
import Hero from "../components/Hero";
import Portfolio from "../components/portfolio";
import Offers from './../components/offers';
import FAQ from './../components/faq';


export default function Home () {
    return(
        <>
            <Hero/>

            <About/>

            <Offers/>

            <Portfolio/>

            <Feedback/>

            <FAQ/>

            

                

                

                <div className="contact-us">
                    <div className="contact-us-top">
                        <p>Contact Us</p>
                    </div>

                    <h4>
                        Contact Us & We Can
                        Work Together
                    </h4>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officiis
                        numquam vel voluptatem nesciunt animi excepturi ab accusantium. Nostrum culpa
                        omnis deserunt sit fugit at porro, esse quibusdam id veniam.
                    </p>

                    <form>
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea placeholder="Your Message"></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            
        </>
    )
}