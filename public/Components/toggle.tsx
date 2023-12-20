// components/ToggleComponent.js
import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../elephant.json';
import Link from 'next/link';

const ToggleComponent: React.FC = () => {
    const [isFirstDivVisible, setFirstDivVisible] = useState(true);
  
    const handleToggleClick = () => {
      setFirstDivVisible(!isFirstDivVisible);
    };
  
    return (
      <div>
        {/* Toggle button */}
        <button onClick={handleToggleClick} className=" bg-slate-800 text-white pybg-2 px-4 ">
          {isFirstDivVisible ? 'Show Second Div' : ''}
        </button>
  
        {/* Render content based on visibility state */}
        {isFirstDivVisible ? (
          <div>
              <Lottie animationData={animationData} />
          </div>
  
        ) : (
          
        <div className=''>
            <div className=''>
                <div className='right rounded grid grid-cols-4 h-3/4 py-10 p-10 pt-24 gap-2'>
                  <div className='item rounded-2xl col-span-1 bg-green-200 flex items-center justify-center h-full text-xl font-bold p-10'>Hey</div>
                  <div className='item rounded-2xl col-span-2 bg-red-400 flex items-center justify-center h-full text-xl font-bold p-10'>Chat to Assist</div>
                  <div className='item rounded-2xl bg-orange-300 flex items-center justify-center h-full text-xl font-bold p-10'>Discover</div>
                  <div className='item rounded-2xl col-span-2 bg-orange-200 flex items-center justify-center h-full text-xl font-bold p-10'>To Stay</div>
                  <div className='item rounded-2xl row-span-2 bg-green-400 flex items-center justify-center h-full text-xl font-bold p-10'>Pricing</div>
                  <div className='item rounded-2xl bg-pink-300 flex items-center justify-center h-full text-xl font-bold p-10'>Best Packages</div>
                  <div className='item rounded-2xl bg-yellow-200 flex items-center justify-center h-full text-xl font-bold p-10'>Travelling</div>
                  <div className='item rounded-2xl bg-blue-100 flex items-center justify-center h-full text-xl font-bold p-10'>Free Guide</div>
                  <div className='item rounded-2xl bg-red-300 flex items-center justify-center h-full text-xl font-bold p-10'>About Us</div>
                </div>
                <p className='p-4 text-black rounded-2xl max-w font-extrabold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, sint optio perspiciatis quod quae id explicabo. Ipsum veniam autem quos ipsam molestiae natus vitae exercitationem optio placeat saepe eaque dolore repellendus pariatur debitis quasi, quas, odio aut. Blanditiis rem molestias illum dolore cum aliquam porro magnam nisi aliquid, consequuntur accusamus.
                </p>
                </div>
        </div>
        )}
      </div>
    );
  };
  
  export default ToggleComponent;