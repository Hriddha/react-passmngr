import React, { useEffect, useRef, useState } from 'react'
import quoteImg from "./quote.png"
import c1 from "./c1.jpg"
import c2 from "./c2.jpg"
import c3 from "./c3.jpg"
import Footer from './Footer'

const Home = () => {


  const [isIntersecting1, setIsIntersecting1] = useState(false);
  const [isIntersecting2, setIsIntersecting2] = useState(false);
  const [isIntersecting3, setIsIntersecting3] = useState(false);
 

  const icon1Ref = useRef();
  const icon2Ref = useRef();
  const icon3Ref = useRef();
  


  useEffect(() => {
    const observer1 = new IntersectionObserver(([entry]) => {
      setIsIntersecting1(entry.isIntersecting);
    });

    const observer2 = new IntersectionObserver(([entry]) => {
      setIsIntersecting2(entry.isIntersecting);
    });

    const observer3 = new IntersectionObserver(([entry]) => {
      setIsIntersecting3(entry.isIntersecting);
    });



    observer1.observe(icon1Ref.current);
    observer2.observe(icon2Ref.current);
    observer3.observe(icon3Ref.current);
 

    return () => {
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
      
    };
  }, [icon1Ref, icon2Ref, icon3Ref]);




  return (
    <div>
      <section id="* section1" className='flex justify-center border-4 h-110 items-center relative overflow-hidden '>
        <h1 className=' -m-12 w-72 text-2xl xl:w-98 xl:h-80 lg:ml-0 sm:absolute static font-black xl:text-4xl animate-horizontalAppearance lg:text-2xl md:text-2xl lg:h-64 lg:w-80 md:w-72 md:-ml-14 '>Pass<span className='text-green-400'>Sphere</span> is a secure online vault that stores and organizes your login credentials, providing a convenient and safe way to access your online accounts. </h1>
        
        <div className='* absolute xl:w-98 -bottom-280  sm:animate-verticalAppearance animate-verticalAppearance_ph xl:ml-102 lg:w-96 sm:ml-96 -z-1   '>
          <dotlottie-player 
            src="https://lottie.host/6c3e140a-653b-4cdd-8322-8c32b30c8fca/lnIWuaZmFD.json" 
            background="transparent"
            speed="1"  loop autoplay>
              
          </dotlottie-player>
        </div>

      </section>
      <section  id='section2' className=' flex flex-wrap sm:flex-nowrap justify-center relative gap-48 border-2 bg-slate-200  '>
        <div  className={`sm:sticky * z-1   top-48 sm:m-4 mt-8 mx-4 lg:w-100 xl:h-96 lg:h-84 lg:ml-10 md:h-96 md:ml-10  md:w-96 font-semibold flex justify-center text-justify flex-col`}>
          <div className='lg:text-2xl md:text-xl font-bold mt-4 text-nowrap text-xl'>Simplifying User Experience</div>
          <div className='p-3 lg:text-xl md:font-medium font-bold'>
            A password manager streamlines the login process by securely storing all your credentials in one place,
            allowing quick and easy access to your accounts without needing to remember multiple passwords.
          </div>

          
          <div className='lg:text-2xl md:text-xl font-bold text-xl mt-4'>Enhancing Security</div>

          <div className='p-3 lg:text-xl md:font-medium font-bold'>
          By generating and storing strong, unique passwords, 
          a password manager reduces the risk of breaches and 
          keeps sensitive information safe from unauthorized access.

          </div>
        </div>

      <div className={`lg:w-96 md:w-96 md:min-h-110 flex flex-col lg:mr-8 md:mr-2`} >
          
          <div ref={icon1Ref} className={ `m-2 border-2 border-black rounded-md img1 transition-opacity duration-1000 ease-in ${isIntersecting1?"opacity-100":"opacity-0"} `}>
            <dotlottie-player src="https://lottie.host/243c661b-c684-4733-9938-acefb2378da6/jI6g8E9ZLt.json"
              background="transparent" speed="1"
              loop autoplay>
            </dotlottie-player>
          </div>

        <div ref={icon2Ref} className= { ` border-2 border-black rounded-md img2 m-2 transition-opacity duration-1000 ease-in ${isIntersecting2?"opacity-100":"opacity-0"}`}>
            <dotlottie-player src="https://lottie.host/cb00d2b1-e4ef-4327-a1dd-360efa4f1d0d/ahLCa5bDZc.json"
             background="transparent" speed="1" 
             loop autoplay></dotlottie-player>
          </div>


          <div ref={icon3Ref} className={ ` border-2 border-black rounded-md img3 m-2 transition-opacity duration-1000 ease-in ${isIntersecting3?"opacity-100":"opacity-0"}`}>
            <dotlottie-player src="https://lottie.host/0da865bb-1ebc-45e1-9770-305b0b0a105d/C0n1mGqvri.json" 
             background="transparent" speed="1" 
             loop autoplay></dotlottie-player>
          </div>


        </div>
      </section>
      
      <section className='testimony   overflow-hidden'>
      
        <div className='text-center  text-2xl font-extrabold m-8'>Testimonials</div>
        <div className='text-center font-extrabold text-3xl '>What our <span className='text-green-400'>Clients</span> say about us</div>

        <div className='ClientSection flex flex-col lg:flex-row md:flex-col items-center justify-center gap-4 m-10'>
          <div className='border-2  lg:h-96 lg:w-80 md:w-80  m-6 p-4 animate-glow '>
            <div ><img className='block m-auto' src={quoteImg} alt="quotation"  /></div>
            <div className='m-4 mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Reiciendis quo accusantium earum ut consequuntur atque quia, beatae sint! Minima, sed.
            </div>
            <div className="* ">
              <img className='rounded-full * h-40 w-48 block m-auto p-4' src={c1} alt="client1" />

            </div>
          </div>
            
          <div className='border-2  lg:h-96 lg:w-80 lg: md:w-80 m-6 p-4 animate-glow '>
            <div ><img className='block m-auto' src={quoteImg} alt="quotation"  /></div>
            <div className='m-4 mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Reiciendis quo accusantium earum ut consequuntur atque quia, beatae sint! Minima, sed.
            </div>
            <div className="* ">
              <img className='rounded-full * h-40 w-48 block m-auto p-4' src={c2} alt="client2" />

            </div>
          </div>

          <div className='border-2  lg:h-96 lg:w-80 lg: md:w-80 m-6 p-4 animate-glow '>
            <div><img className='block m-auto' src={quoteImg} alt="quotation"  /></div>
            <div className='m-4 mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Repellendus tempore facere, inventore illo amet quis non unde dolores beatae natus?
            </div>
            <div className="* ">
              <img className='rounded-full * h-40 w-48 block m-auto p-4' src={c3} alt="client3" />

            </div>
          </div>
        </div> 
      </section>
      <Footer/>
    </div>
  )
}

export default Home
