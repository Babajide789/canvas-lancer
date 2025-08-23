import Hero from "../components/Hero";



export default function Home () {
    return(
        <>
            <Hero/>

            <div className="panel-2">
                {/* INSRT SIDE IMG */}
                <div className="img-left">

                </div>

                <div className="text-right">
                    <p>About CanvasLancer</p>

                    <h4>
                        Introduction To Best 
                        Digital Agency
                    </h4>

                    <p>
                        Lorem
                    </p>

                    <button>
                        Hire Us
                    </button>
                </div>

                <div className="panel-3">
                    <div className="panel-3-top">
                        <p>Our Portfolio</p>
                    </div>

                    <p>
                        Projects We Have 
                        Completed
                    </p>

                    <div className="buttons">
                        <button>
                            All
                        </button>
                            
                        <button>
                            UI/UX
                        </button>
                        
                        <button>
                            Development
                        </button>
                        
                        <button>
                            Mobile Development
                        </button>
                        
                        <button>
                            SEO
                        </button>
                    </div>

                    <div className="bottom-images">
                        {/* INSRT IMAGES */}
                    </div>
                </div>

                <div className="panel-4">
                    <div className="panel-4-top">
                        <p>Customer Feedback</p>
                    </div>

                    <p>
                        What Our Customer 
                        Say About Us
                    </p>
                    
                    <div className="feedback-cards">
                        <div className="card">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quisquam, voluptatum.
                            </p>
                            <h5>John Doe</h5>
                            <span>CEO, Company</span>
                        </div>

                        <div className="card">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quisquam, voluptatum.
                            </p>
                            <h5>Jane Smith</h5>
                            <span>CTO, Company</span>
                        </div>

                        <div className="card">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quisquam, voluptatum.
                            </p>
                            <h5>Emily Johnson</h5>
                            <span>CMO, Company</span>
                        </div>

                    </div>
                </div>


                <div className="FAQ">
                    <div className="FAQ-top">
                        <p>Frequently Asked Questions</p>
                    </div>

                    <p>
                        Answers to Common Questions
                    </p>

                    <div className="questions">
                        <div className="question">
                            <h5>What services do you offer?</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        </div>

                        <div className="question">
                            <h5>How can I contact you?</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        </div>

                        <div className="question">
                            <h5>What is your pricing model?</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        </div>

                        <div className="question">
                            <h5>Do you offer support?</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        </div>
                    </div>
                </div>

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
            </div>
        </>
    )
}