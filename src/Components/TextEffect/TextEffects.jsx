import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Website',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Service Provider',
        1500,
        'Graphic Design',
        1500,
        'Seo Service',
        1500,
        'Logo',
        1500,
        'Video Editing',
        1500,
        'Video Animation',
        1500,
        'Content Writing',
        1500,
        'Web design'
      ]}
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#FDDA0D] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;