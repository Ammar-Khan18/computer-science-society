import React from 'react';
import DisplayLottie from '../Lottie/DisplayLottie';
import Welcome from '../../public/Home/Welcome.json';

const WelcomeAnimation: React.FC = () => {
    return (
        <div className='bg-[#0a192f] flex justify-center items-center bg-transparent'> 
            <DisplayLottie animationData={Welcome} />
        </div>
    );
}

export default WelcomeAnimation;