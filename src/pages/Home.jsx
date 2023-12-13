// import './app.css'
import Navbar from '../../components/navbar'

function Home() {

  return (
    <>
    <Navbar />
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
      </section>
    </main>
    </>
  );
}

export default Home;