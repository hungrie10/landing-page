import React, { useEffect } from 'react'
import gym_hottie from "../public/gym_hottie.jpg"
import dumbell from "../public/dumbell.png"
import { Link } from 'react-router-dom'
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
        if(!header.classList.contains('sticky')){
          header.classList.add("sticky");
        }
        else {
          ''
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
        
      
        
      </main>
    </>
  )
}

export default App
