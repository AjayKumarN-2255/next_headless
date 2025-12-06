/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'

function Hero() {
    return (
        <div className='mb-4'>
            <h1 className='font-bold text-2xl mb-2'>Hi, I am Ajay.</h1>
            <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptas distinctio debitis dolorem maiores, dignissimos eligendi libero, aperiam culpa iure nesciunt vel exercitationem reprehenderit deleniti earum atque quo doloremque! Molestiae?</p>
            <Image src={'/hero.webp'} width={750} height={150} quality={70} placeholder='blur' blurDataURL='hero-placeholder.png'
                loading='eager' alt='hero image' />
        </div>
    )
}

export default Hero