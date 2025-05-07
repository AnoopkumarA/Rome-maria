import './App.css'
import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after navigation
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className="overflow-x-hidden">
      <section className="relative bg-[#D8CEC2] w-full overflow-hidden ">
        <nav className="w-full flex justify-between items-center py-4 px-6 fixed top-0 left-0 bg-white z-50 shadow-sm">
          {/* Logo or Brand Name */}
          <div className="text-base md:text-xl font-bold">ROME MARIA</div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-16 text-base md:text-[1.2rem] font-semibold">
            <li><button onClick={() => handleScroll('about')} className="focus:outline-none cursor-pointer hover:text-blue-600 transition-colors">ABOUT</button></li>
            <li><button onClick={() => handleScroll('service')} className="focus:outline-none cursor-pointer hover:text-blue-600 transition-colors">SERVICES</button></li>
            <li><button onClick={() => handleScroll('contact')} className="focus:outline-none cursor-pointer hover:text-blue-600 transition-colors">CONTACT</button></li>
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full focus:outline-none group"
            onClick={toggleMenu}
          >
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black my-1 transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </button>
        </nav>
        
        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-20`}
        >
          <ul className="flex flex-col space-y-8 text-xl font-semibold items-center">
            <li><button onClick={() => handleScroll('about')} className="focus:outline-none cursor-pointer hover:text-blue-600 transition-colors">ABOUT</button></li>
            <li><button onClick={() => handleScroll('service')} className="focus:outline-none cursor-pointer hover:text-blue-600 transition-colors">SERVICES</button></li>
            <li><button onClick={() => handleScroll('contact')} className="focus:outline-none cursor-pointer hover:text-blue-600 transition-colors">CONTACT</button></li>
          </ul>
        </div>
        
        <section id='hero'>
          <div className="bg-cover min-h-[30rem] md:h-[51.5rem] bg-center w-full relative flex items-center z-[10]" style={{ backgroundImage: "url('/bgg.png') " }}>
            <div className="relative z-10 px-4 md:px-36 py-8 md:py-12 text-left flex flex-col md:flex-row items-center w-full md:top-5">
              <div className="flex-1 md:flex-2 top-25  md:top-0 -left-10  md:text-left md:left-5 relative mb-8 md:mb-0">
                <div className="text-xl md:text-6xl font-semibold leading-tight text-white flex flex-col space-y-0 md:-space-y-4 md:-mt-[3rem]">
                  <span><span className="text-blue-600">C</span>rafting Precision,</span>
                  <span><span className="text-blue-600">C</span>reating Spaces,</span>
                  <span><span className="text-blue-600">C</span>elebrating Moments</span>
                </div>
                <div className="mt-4 md:mt-6 text-white text-[0.54rem] md:text-lg font-light">
                  <div>Your All-in-One Partner for</div>
                  <div>CNC Machining, Interior Design, and Customized Mementos.</div>
                </div>
              </div>
              <div className="flex-1 flex justify-end  -mt-20 w-full md:justify-start md:-mt-12 -left-3 md:-left-[25rem] relative">
                <img src="/yellow.png" className="w-full max-w-[15rem] md:max-w-[34.4rem] h-auto md:h-[25rem] rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
          <img src="/civil.png" alt="Corner Accent" className="absolute right-0 w-25 md:w-[10.8rem] lg:w-[10.8rem] top-[26.3rem] md:top-[41.6rem]" />
        </section>

        
        {/* Features Section */}
        <section className="w-full relative md:top-16 py-12 md:mb-30  flex justify-center">
          <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between  items-start gap-12 px-6 md:px-12">
            {/* Top Rated */}
            <div className="flex flex-row items-start w-full md:w-1/3 gap-4">
              <img src="/star.svg" alt="Top Rated" className="w-14 h-14 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Top Rated</h3>
                <p className="text-base md:text-lg text-black/80">Trusted by clients for excellence across CNC, interiors, and custom mementos.</p>
              </div>
            </div>
            {/* Best Quality */}
            <div className="flex flex-row items-start w-full md:w-1/3 gap-4">
              <img src="/best.svg" alt="Best Quality" className="w-14 h-14 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Best Quality</h3>
                <p className="text-base md:text-lg text-black/80">We deliver unmatched craftsmanship with attention to every detail</p>
              </div>
            </div>
            {/* Low Cost */}
            <div className="flex flex-row items-start w-full md:w-1/3 gap-4">
              <img src="/low.svg" alt="Low Cost" className="w-14 h-14 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Low Cost</h3>
                <p className="text-base md:text-lg text-black/80">Premium services tailored to your budget—no compromise on quality</p>
              </div>
            </div>
          </div>
        </section>
        </section>
        


        {/* About Section */}
        <section className="relative w-full bg-white min-h-[32rem] flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start overflow-hidden" id='about'>
          {/* Faded Circle with Vertical Text */}
          <div className="hidden md:flex absolute -top-32 -left-49 w-[34.6rem] h-[34.6rem] rounded-full bg-[#f3f3f3] items-center justify-center">
            <span className="absolute left-1/2 top-[10.7rem] text-3xl md:text-[2.53rem] font-extrabold text-gray-300 tracking-wider" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.1em', transform: 'rotate(180deg)' }}>
              ROME MARIA
            </span>
          </div>
          
          {/* Mobile Circle */}
          <div className="md:hidden relative w-full overflow-hidden">
            <div className="absolute -top-39 -left-40 w-87 h-85 rounded-full bg-[#f3f3f3] flex items-center justify-center">
              <span className="absolute left-50 top-[10.7rem] text-lg font-extrabold text-gray-300 tracking-wider" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', letterSpacing: '0.1em', transform: 'rotate(180deg)' }}>
                ROME MARIA
              </span>
            </div>
            <div className="h-46"></div> {/* Taller spacer to accommodate larger circle */}
          </div>
          
          {/* Content Container */}
          <div className="w-full max-w-7xl px-4 flex flex-col md:flex-row">
            {/* About Images Collage - Desktop */}
            <div className="hidden md:block relative top-40 left-73 z-10">
              <img src="/engine.png" alt="Industry" className="relative top-0 -left-20 w-[20rem] h-[20rem] object-cover shadow-xl rounded-none transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" />
              <img src="/machine.png" alt="Workshop" className="relative -top-20 left-30 w-[20rem] h-[20rem] object-cover shadow-xl rounded-none transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" />
              <img src="/design.png" alt="Interior" className="relative -top-81 -left-50 w-[20rem] h-[20rem] object-cover shadow-xl rounded-none transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" />
            </div>
            
           
            
            {/* About Content */}
            <div className="relative z-10 px-4 md:px-8 -top-14 md:top-0  md:pl-[22rem] md:py-28 w-full max-w-4xl md:left-40 mx-auto flex flex-col items-center md:items-start">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-center md:text-right md:relative md:left-26">
                ABOUT <span className="text-blue-600">US</span>
              </h2>
              <p className="text-base md:text-base font-medium text-black text-center md:text-left">
                We're a passionate team turning ideas into reality through CNC work, interiors, and custom mementos. From sleek designs to heartfelt keepsakes, we love creating things that matter. Quality, creativity, and care go into everything we do. Let's build something amazing—together!
              </p>

               {/* About Images Collage - Mobile */}
               <div className="md:hidden flex flex-col gap-4 mb-8 relative top-17">
                 <div className="transform transition-all duration-300 active:scale-95">
                   <img src="/engine.png" alt="Industry" className="w-[20rem] h-73 object-cover shadow-xl rounded-none" />
                 </div>
                 <div className="transform transition-all duration-300 active:scale-95">
                   <img src="/machine.png" alt="Workshop" className="w-[20rem] h-68 object-cover shadow-xl rounded-none" />
                 </div>
                 <div className="transform transition-all duration-300 active:scale-95">
                   <img src="/design.png" alt="Interior" className="w-[20rem] h-68 object-cover shadow-xl rounded-none" />
                 </div>
               </div>
              
              {/* About Images Row - Desktop */}
              <div className="hidden md:flex flex-row -space-x-9 -left-12 relative mt-10 w-full justify-center md:justify-start">
                <img src="/vision.png" alt="About 1" className="w-[23rem] h-[21rem] object-cover" />
                <img src="/mission.png" alt="About 2" className="w-[24rem] -mt-3 h-[22.7rem] object-cover" />
              </div>
              
               {/* About Images Row - Mobile */}
              <div className="md:hidden flex flex-col gap-6 mt-8 relative top-20 z-[-10]  w-full">
                <img src="/vision.png" alt="About 1" className="w-full h-60 object-cover" />
                <img src="/mission.png" alt="About 2" className="w-full h-60 object-cover" />
              </div>
              
              {/* Vision/Mission - Desktop */}
              <div className='hidden md:flex flex-row relative -top-[22rem]'>
                {/* Vision Section */}
                <section className="w-[13rem] flex flex-col items-center py-16">
                  <h2 className="text-xl md:text-3xl relative left-4 -top-1 font-extrabold mb-8 text-center">Vision</h2>
                  <p className="max-w-md text-[0.45rem] md:text-[0.68rem] text-center relative left-5 font-medium text-black/80 leading-snug">
                    To be a leading creative hub for precision manufacturing, inspiring interior designs, and meaningful mementos—where innovation meets craftsmanship.
                  </p>
                </section>
                {/* Mission Section */}
                <section className="w-[13rem] flex flex-col items-center py-16">
                  <h2 className="text-xl md:text-3xl relative left-30 font-extrabold mb-8 -top-2 text-center">Mission</h2>
                  <p className="max-w-md text-[0.45rem] md:text-[0.68rem] text-center relative left-30 top-2 font-medium text-black/80 leading-snug">
                    To deliver high-quality, affordable, and personalized solutions through CNC machining, interior design, and custom mementos, exceeding client expectations with every project.
                  </p>
                </section>
              </div>
              
              {/* Vision/Mission - Mobile */}
              <div className='md:hidden flex flex-col gap-28  w-[67%] relative -top-[25.3rem] '>
                {/* Vision Section */}
                <section className="w-full flex flex-col items-center ">
                  <h2 className="text-2xl font-extrabold mb-2 text-center">Vision</h2>
                  <p className="text-xs text-center font-medium text-black/80 leading-snug px-4 relative top-7">
                    To be a leading creative hub for precision manufacturing, inspiring interior designs, and meaningful mementos—where innovation meets craftsmanship.
                  </p>
                </section>
                {/* Mission Section */}
                <section className="w-full flex flex-col items-center py-4 relative top-">
                  <h2 className="text-2xl font-extrabold mb-2 text-center">Mission</h2>
                  <p className="text-xs text-center font-medium text-black/80 leading-snug px-4 relative top-3">
                    To deliver high-quality, affordable, and personalized solutions through CNC machining, interior design, and custom mementos, exceeding client expectations with every project.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
        {/* Our Services Section */}
        <section className="w-full md:h-[10rem] min-h-[22rem]   bg-[#f3f3f3] pt-6 pb-24 px-2 md:px-4 rounded-bl-[2rem] md:rounded-bl-[5rem] relative -mt-80 md:mt-0 md:-top-28" id='service'>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative md:-top-6 md:-left-[11.6rem] " >
              {/* Left Large Image */}
              <div className="flex-shrink-0 hidden md:inline-block md:w-[22rem] h-[12rem] md:h-[22rem]   overflow-hidden cursor-pointer">
                <img src="/person.png" alt="Worker" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 max-w-full" />
              </div>
              {/* Services Content */}
              <div className="flex-1 flex flex-col items-center md:items-start w-full mt-14 md:mt-0">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-2 mt-2 text-center md:text-left">
                  <span className="text-black">Our </span><span className="text-blue-500">Services</span>
                </h2>
                <p className="text-base md:text-lg font-normal text-black mt-2 mb-6 text-center md:text-left w-full">
                  We offer expert CNC machining, innovative interior design solutions, and handcrafted custom mementos—all tailored to your unique needs.
                </p>
                {/* Service Images Row */}
                <div className="flex flex-col md:flex-row gap-17 md:gap-8 justify-center md:justify-start relative left-4 mt-2 top-8 md:top-0 w-full cursor-pointer">
                  {/* Memento */}
                  <div className="flex flex-col items-center w-full md:w-[17rem]">
                    <div className="w-full transform transition-all duration-300 md:hover:scale-105 active:scale-95">
                      <img src="/memento.png" alt="Memento" className="w-full max-w-full h-[9rem] object-cover rounded-md " />
                    </div>
                    <span className="mt-2 text-lg md:text-xl font-bold">Memento</span>
                  </div>
                  {/* CNC Cutting */}
                  <div className="flex flex-col items-center w-full md:w-[17rem]">
                    <div className="w-full transform transition-all duration-300 md:hover:scale-105 active:scale-95">
                      <img src="/cnc.png" alt="CNC Cutting" className="w-full max-w-full h-[9rem] object-cover rounded-md " />
                    </div>
                    <span className="mt-2 text-lg md:text-xl font-bold">CNC Cutting</span>
                  </div>
                  {/* Interior Design */}
                  <div className="flex flex-col items-center w-full md:w-[17rem]">
                    <div className="w-full transform transition-all duration-300 md:hover:scale-105 active:scale-95">
                      <img src="/interior.png" alt="Interior Design" className="w-full max-w-full h-[9rem] object-cover rounded-md " />
                    </div>
                    <span className="mt-2 text-lg md:text-xl font-bold">Interior Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section className="w-full bg-white py-20 relative top-10 md:top-0 md:-mt-7 flex justify-center items-center" id='contact'>
          <div className="max-w-5xl w-full flex flex-col relative  md:left-26 md:flex-row gap-1 -space-x-80  px-6">
            {/* For appointments */}
            <div className="flex-1 flex flex-col  items-center relative -left-39 md:left-0 md:items-start">
              <h3 className="text-[1.45rem] md:text-2xl font-normal mb-4">For appointments</h3>
              <div className="text-gray-700 relative left-0 md:left-3.5 text-[1.07rem] mb-4  md:text-left">
                <div>Monday - Saturday<br />10:00 am - 7:00 pm</div>
                <div className="mt-2">+918281290634<br />+917012996617</div>
                <div className="mt-2">cncpala@gmail.com</div>
              </div>
              <div className="flex relative left-0 md:left-3.5  flex-row gap-3 mt-6 md:top-7 top-0">
                <img src="/ig.svg" alt="Instagram" className="w-11 h-11 rounded p-1 transition-transform duration-300 ease-in-out hover:scale-120 cursor-pointer" />
                <img src="/mail.svg" alt="Mail" className="w-11 h-11 rounded p-1 transition-transform duration-300 ease-in-out hover:scale-120 cursor-pointer" />
                <img src="/wa.svg" alt="WhatsApp" className="w-11 h-11  rounded p-1 transition-transform duration-300 ease-in-out hover:scale-120 cursor-pointer" />
              </div>
            </div>
            {/* For enquiries */}
            <div className="flex-1 flex flex-col items-center md:items-start mt-13 md:mt-0 relative top-10 md:top-0">
              <h3 className="text-[1.45rem] md:text-2xl font- mb-9 md:mb-4">For enquiries</h3>
              <form className="w-full max-w-md ">
                <input type="text" placeholder="Name" className="w-full border-0 border-b border-gray-400 mb-4 focus:ring-0 focus:border-black bg-transparent placeholder-gray-500" />
                <input type="email" placeholder="Email" className="w-full border-0 border-b border-gray-400 mb-4 focus:ring-0 focus:border-black bg-transparent placeholder-gray-500" />
                <textarea placeholder="Message" className="w-full border-0 border-b border-gray-400 mb-4 focus:ring-0 focus:border-black bg-transparent placeholder-gray-500 resize-none" rows={1}></textarea>
                <textarea className="w-full border-0 border-b border-gray-400 relative -top-7 focus:ring-0 focus:border-black bg-transparent placeholder-gray-500 resize-none"></textarea>
                <div className="flex items-center mt-5 md:mt-8  relative md:top-0 cursor-pointer group">
                  <svg className="w-16 h-8 mr-2 text-[#6C6C6C] transition-transform transition-colors duration-200 group-hover:scale-105  group-active:scale-95 group-active:text-[#a67c52]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10" y1="20" x2="70" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    <polyline points="60,10 70,20 60,30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <button type="submit" className="text-[1.3rem] text-[#664228] font-medium cursor-pointer transition-transform transition-colors duration-200 group-hover:scale-110 group-active:scale-95 group-active:text-[#664228]">Submit enquire</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
