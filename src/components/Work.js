import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants'
// img
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'


const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto h-full items-center p-8'>
        <div className='flex flex-col lg:flex-row gap-x-20'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-20 mb-12 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-blue-600'>
                My Latest <br />
                Project
              </h2>
              <p className='max-w-sm mb-6'>
                Introduction: My recent projects in data analytics.
              </p>
              <a href='https://github.com/K-m9'>
                <button className='btn btn-sm' id='View_all_Projects'>View all projects</button>
              </a>
            </div>
            {/* proj1 */}
            <a href='https://github.com/K-m9/ABTest' id='ABTEST'>
              <div className='group relative overflow-hidden border-2 
            border-teal-500 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/90 w-full h-full absolute
              z-40 transition-all duration-300'></div>
                {/* img */}
                <img
                  className='group-hover:scale-125 transition-all duration-500'
                  src={Img1} alt='' />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12
                group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient text-[20px]'>AB Test</span>
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-6'>
            <a href='https://github.com/K-m9/machine_learning_algorithms/tree/master' id='Machine_Learning'>
              {/* proj2 */}
              <div className='group relative overflow-hidden border-2 border-teal-500
            rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/90 w-full h-full absolute
              z-40 transition-all duration-300'></div>
                {/* img */}
                <img
                  className='group-hover:scale-125 transition-all duration-500'
                  src={Img2} alt='' />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12
                group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Machine learning algorithms</span>
                </div>
              </div>
            </a>
            {/* proj3 */}
            <a href='https://github.com/K-m9/My-BI-Documents' id='BI'>
              <div className='group relative overflow-hidden border-2 
             border-teal-500 rounded-xl'>
                {/* overlay */}
                <div className='group-hover:bg-black/90 w-full h-full absolute
              z-40 transition-all duration-300'></div>
                {/* img */}
                <img
                  className='group-hover:scale-125 transition-all duration-500'
                  src={Img3} alt='' />
                {/* pretitle */}
                <div className='absolute -bottom-full left-12
                group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Power BI</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div >
    </section >
  );
};

export default Work;
