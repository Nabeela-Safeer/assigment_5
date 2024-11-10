import Image from 'next/image'

const Hero = () => {
  return (
    <div className='container flex justify-between p-20 items-center '>
        {/* left side */}
        <div className=' ml-10' >
            <div><h1 className='text-4xl w-[450px] mt-20 font-serif font-bold'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1></div>
            <p className='mt-10 w-[550px] mb-10 text-xl'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
            <button className='bg-[#A29875] text-white hover:bg-slate-500 cursor-pointer w-[200px] h-8 rounded-full font-serif'>Explore Now</button>
        </div>

        {/* right side */}
        <div className='-mr-10'>
            <Image
            src="/image/figma-image.svg"
            alt="image"
            width={480}
            height={600}
            />
        </div>
    </div>
  )
}

export default Hero