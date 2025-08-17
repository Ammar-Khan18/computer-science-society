import React from 'react';
import DisplayLottie from '../Lottie/DisplayLottie';
import Wave from '../../public/Codex/wave.json';

const WaveAnimation: React.FC = () => {
    return (
        <div className='flex justify-center items-center bg-transparent'> 
            <DisplayLottie animationData={Wave} />
        </div>
    );
}

export default WaveAnimation;