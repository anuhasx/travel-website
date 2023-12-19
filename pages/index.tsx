import Image from 'next/image'
import { Inter } from 'next/font/google'
import React , {useState} from 'react';
import Lottie from 'lottie-react';
import ToggleComponent from '@/public/Components/toggle';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isComponentVisible, setComponentVisibility] = useState(false);

  const handleToggleClick = () => {
    setComponentVisibility(!isComponentVisible);
  };

  return (
    <main>
    <div
      className="background-image"
      style={{
        backgroundImage: 'url("/learnado_bg.jpeg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 'full', // Set height as needed
      }}
    > 
      
      <header className=" p-4 shadow-xl bg-slate-500 bg-opacity-50">
        <div className="container mx-auto">
            <div className="flex items-center justify-between rounded-xl">
                <div className="text-2xl font-bold">Your Logo</div>

                <nav className="space-x-4 text-white">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Services</a>
                    <a href="#" className="hover:underline">Contact</a>
                </nav>
            </div>
        </div>
    </header>
      
      <div className="flex h-screen">
        <div className="w-1/2 ">
          

            <h1 className='text-black text-opacity-90 text-6xl p-10 pt-24 font-bold'>
            Welcome to the Worlds' Cutest <br /> <span className='text text-9xl'>Island</span> 
            </h1> 
              <p className='p-10 text-black max-w font-extrabold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur explicabo incidunt quos sed ratione ipsum voluptatibus sunt tempore eaque. Numquam nihil eligendi, necessitatibus minus neque, exercitationem nemo maiores iusto ducimus ad blanditiis facere illum ex enim? Dolorem a odio voluptas praesentium voluptatibus possimus, ut, minima culpa facere nemo modi aliquid?
              </p>
              <div className='for_button p-10 pt-4 px-16 space-x-6'>
                <button className='button bg-orange-500 rounded-3xl px-8 py-4'>Log In</button>
                <button className='button bg-green-700 rounded-3xl px-8 py-4'>Sign In</button>
              
          </div>
        </div>
        <div className="w-1/2">
          <div className=' content-center text-center justify-center pt-10'>
          <ToggleComponent />
          </div>

        </div>
      </div>
      <footer className=" text-white bg-slate-500 bg-opacity-50 justify-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* About Us Section */}
          <div className='  justify-between content-center text-center'>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          {/* Contact Information */}
          <div className='  justify-between content-center text-center'>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-300">
              Email: contact@example.com<br />
              Phone: +1 234 567 890<br />
              Address: 123 Main St, Cityville
            </p>
          </div>

          {/* Purpose of the Web Application */}
          <div className='  justify-between content-center text-center'>
            <h2 className="text-2xl font-bold mb-4">Our Purpose</h2>
            <p className="text-gray-300">We aim to provide [describe the purpose of your web application] to [target audience]. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          </div>
        </div>
      </footer>
    </div>




    </main>
  )
}
