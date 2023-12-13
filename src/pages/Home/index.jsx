//import './app.css'
import './style.css';
import React from 'react';
//import Navbar from '../../components/Navbar'

function Home() {

    return (
        <>
            <main>
                <section className="HomePage">
                    <h2>Welcome to My Web Portfolio!</h2>
                    <p>
                        Explore my projects, learn about my journey, and get in touch with me.
                    </p>
                </section>
                <section className="MyCareerLife">
                    <h3>About Me</h3>
                    <p className="AboutMeBio">
                        Hello, my name is Alexander Merida Castillo. Currently, I'm working hard
                        to move forward with my career as a future web developer. I chose this
                        career path because I wanted to create my own applications and designs unique to me.
                    </p>
                    {/* My sections for My Work and Contact Me here */}
                    <div>

                        {/* My Work Section */}
                        <section className="MyWorkSection">
                            <h4>My Work</h4>
                            {/* Add Images and description with img src and p element */}
                            <ul className="WorkCategories">
                                {/* These are my category boxes for my future projects */}
                                <li>Surf Report</li>
                                <img src="./assets/images/surf-report.jpg" alt="surf report" />
                                <div className="imgHover">MERN Stack</div>

                                <li>Led Wall</li>
                                <img src="./assets/images/led_wall.jpg" alt="led wall" />
                                <div className="imgHover">Node/IoT</div>

                                <li>Calculator</li>
                                <img src="./assets/images/calculator.jpg" alt="calculator" />
                                <div className="imgHover">React/JavaScript/CSS</div>

                                <li>Pastel Puzzels</li>
                                <img src="./assets/images/pastel_puzzels.jpg" alt="pastel puzzels" />
                                <div className="imgHover">MERN Stack</div>

                                <li>Run Buddy</li>
                                <img src="./assets/images/run_buddy.webp.jpg" alt="run buddy" />
                                <div className="imgHover">HTML/CSS</div>
                            </ul>
                        </section>
                        {/* End My Work Section */}
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;