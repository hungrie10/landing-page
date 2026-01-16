import React, { useEffect } from 'react'
import gym_hottie from "../public/gym_hottie.jpg"
import dumbell from "../public/dumbell.png"
import { HashLink as Link } from 'react-router-hash-link'
// import { Link } from 'react-router-dom'
import { useRef } from 'react'


function App() {

  const myRef = useRef(null);
  const headRef = useRef(null);
  const remRef = useRef(null);

  useEffect(() => {
    document.title = "Home Page"
    const header = headRef.current;
    const priceSection = myRef.current;
    const moveSection = remRef.current;

    const handleMouseEnter = () => {
      console.log("Entered pricing section");

      setTimeout(() => {
        if(header.classList.contains('sticky')){
          ''
        }
        else {
          header.classList.add("sticky");
        }
      }, 2000);
      
      
    };
    const handleMouseLeave = () => {
      console.log("Entered pricing section");

      header.classList.remove("sticky");
      
      
    };
    priceSection.addEventListener("mouseenter", handleMouseEnter);
    moveSection.addEventListener("mouseenter", handleMouseLeave);

  },[])


  return (
    <>
      <section id='behind_me'>
        <img src={gym_hottie} alt="" />
      </section>

      <main>
        <header ref={headRef}>
          <img src={dumbell} id='logo' alt="" />

      <nav>
  <ul>
    <li>
      <Link to="#hero_page">Home</Link>
    </li>
    <li>
      <Link to="#features_page">Features</Link>
    </li>
    <li>
      <Link to="#new_pge">About</Link>
    </li>
    <li>
      <Link to="#pricing_page">Pricing</Link>
    </li>
    <li>
      <Link to="#blogs">Blogs</Link>
    </li>
  </ul>
</nav>


        
        </header>

        <section id='hero_page'  ref={remRef}>
          <h1><span>No excuses</span> <br /> Just iron, sweat, and the version of you that refuses to quit. Every rep is proof. Every <br /> drop counts. This is where discipline shows up and confidence is built one lift at a time.</h1>
        </section>

        <section id='new_pge' ref={myRef}>
          <canvas></canvas>
          <div id="caption">
            <h1>Gain access to a million courses world wide</h1>
          </div>  
          <canvas></canvas>
     
          <div id="flash_cards">
              <span>
              <article>
                <div>
                  <h3>Meet Kelechi</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eveniet. Ad qui, impedit nemo laudantium assumenda dicta quisquam at repellendus velit cupiditate mollitia doloremque, veniam laboriosam, adipisci sit quod necessitatibus?</p>
                </div>
            </article>
              </span>
           
              <span id='hot'>
            <article>
                <div>
                  <h3>Meet Kelechi</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eveniet. Ad qui, impedit nemo laudantium assumenda dicta quisquam at repellendus velit cupiditate mollitia doloremque, veniam laboriosam, adipisci sit quod necessitatibus?</p>
                </div>
               
            </article>
           
            <article>
                <div>
                  <h3>Meet Kelechi</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eveniet. Ad qui, impedit nemo laudantium assumenda dicta quisquam at repellendus velit cupiditate mollitia doloremque, veniam laboriosam, adipisci sit quod necessitatibus?</p>
                </div>
            </article>
              </span>
           
          </div>
     
        </section>  

        <section id='pricing_page'>

       
          <div id='groups'>

            <article>
              <div>
              <span>
                <h2>Free</h2>
                <p>Whether you’re stepping into fitness for the first time or getting <br /> back after a long pause, this tier helps you reconnect with the habit of  <br />showing up.</p>
            </span>
              </div>

              <div>
                <h1>$29</h1>
                <button>Get started</button>
              </div>

              <div>
                <li>Access to basic workouts and starter routines</li>
<li>Limited tracking for workouts and progress</li>
<li>Beginner-friendly exercises and guidance</li>
<li>Explore the platform with no payment required</li>
<li>Perfect for building the habit of consistency</li>
              </div>
          </article>
            

            <article>
              <div>
              <span>
                <h2>Free</h2>
                <p>Whether you’re stepping into fitness for the first time or getting <br /> back after a long pause, this tier helps you reconnect with the habit of  <br />showing up.</p>
            </span>
              </div>

              <div>
                <h1>$29</h1>
                <button>Get started</button>
              </div>

              <div>
                <li>Access to basic workouts and starter routines</li>
<li>Limited tracking for workouts and progress</li>
<li>Beginner-friendly exercises and guidance</li>
<li>Explore the platform with no payment required</li>
<li>Perfect for building the habit of consistency</li>
              </div>
          </article>
            

            <article>
              <div>
              <span>
                <h2>Free</h2>
                <p>Whether you’re stepping into fitness for the first time or getting <br /> back after a long pause, this tier helps you reconnect with the habit of  <br />showing up.</p>
            </span>
              </div>

              <div>
                <h1>$29</h1>
                <button>Get started</button>
              </div>

              <div>
                <li>Access to basic workouts and starter routines</li>
<li>Limited tracking for workouts and progress</li>
<li>Beginner-friendly exercises and guidance</li>
<li>Explore the platform with no payment required</li>
<li>Perfect for building the habit of consistency</li>
              </div>
          </article>
            
          </div>

          <div id='down'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus rerum quod, officia <br /> obcaecati laborum quos autem labore fuga recusandae itaque!</p>
          </div>
        </section>
        
<section id='features_page'>
  <div id="inner_feature">
    <article>
      <h2>Smart Workout Plans</h2>
      <p>
        Train with purpose using programs designed to match your goals, strength level,
        and schedule. No guessing. Just clear direction from day one.
      </p>
    </article>

    <article>
      <h2>Progress Tracking</h2>
      <p>
        Every rep, every set, every win is recorded. Watch your strength,
        endurance, and confidence grow week by week.
      </p>
    </article>

    <article>
      <h2>Expert Coaching</h2>
      <p>
        Learn proper form, technique, and mindset from trainers who understand
        what real progress looks like, both in and out of the gym.
      </p>
    </article>

    <article>
      <h2>Flexible Training</h2>
      <p>
        Whether you train at home or in the gym, early mornings or late nights,
        your plan adapts to your lifestyle, not the other way around.
      </p>
    </article>

    <article>
      <h2>Nutrition Guidance</h2>
      <p>
        Fuel your workouts with simple, practical nutrition tips that support
        muscle growth, fat loss, and recovery without extreme diets.
      </p>
    </article>

    <article>
      <h2>Motivation & Community</h2>
      <p>
        Stay consistent with challenges, progress milestones, and a community
        that pushes you to show up even on the tough days.
      </p>
    </article>
  </div>
</section>
      

        <footer>
          <section id='inner_footer'>
            <img src={dumbell} alt="" />

           
            <nav>
              <h2>Links</h2>
                <ul>
             <li>
              <Link>Home</Link>
             </li>
             <li>
              <Link>Features</Link>
             </li>
             <li>
              <Link>About</Link>
             </li>
             <li>
              <Link>Pricing</Link>
             </li>
             <li>
              <Link>Blogs</Link>
              </li>
              </ul>
            </nav>

           
          </section>
      </footer>
        
      </main>
    </>
  )
}

export default App
