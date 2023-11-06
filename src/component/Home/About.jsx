import React from 'react';

const About = () => {
    return (
        <div className='max-w-[1200px] mx-auto mt-10'>
            <h2 className="mb-12 text-4xl font-bold  text-center sm:text-5xl">About Us</h2>
            <div className=''>
                <div className='flex gap-4 justify-evenly flex-row-reverse mb-10 '>
                    <img className='w-96' src="https://i.ibb.co/jz6y62T/5180214.jpg" alt="" />
                    <div className='space-y-3'>
                        <h1 className='text-2xl text-center font-bold'>OUR MISSION</h1>
                        <p className='text-base font-medium'>
                        At Fitness and Sports Online Career Maker, our mission is to empower individuals passionate about fitness and sports to transform their love for these fields into successful and fulfilling online careers. We strive to provide the knowledge, resources, and guidance necessary for aspiring professionals to build and grow their online presence, share their expertise, and impact the lives of others positively. We are committed to fostering a supportive community and offering comprehensive educational content, enabling our members to not only achieve their career aspirations but also contribute to the betterment of global health and well-being through accessible and inspiring online fitness and sports experiences.
                        </p>
                    </div>
                </div>
                <div className='flex gap-4 justify-evenly'>
                    <img className='w-96' src="https://i.ibb.co/LNN9hVR/4089.jpg" alt="" />
                    <div className='mt-7 space-y-3'>
                        <h1 className='text-2xl text-center font-bold'>OUR VISION</h1>
                        <p className='text-base font-medium'>Our vision is to be the premier destination for those seeking to launch and excel in online careers within the fitness and sports industry. We aim to create a dynamic and inclusive platform that bridges the gap between enthusiasts and professionals, fostering innovation and excellence. We see a future where anyone with a passion for fitness and sports can leverage the digital realm to build a sustainable and rewarding career, while simultaneously promoting physical health and wellness on a global scale. Fitness and Sports Online Career Maker envisions a world where online careers in these fields are not only attainable but also a driving force behind positive change, helping people lead healthier, more active lives.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;