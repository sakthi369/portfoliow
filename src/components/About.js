import AboutImg from '../assets/about.png';
export default function About() {
    return<section className=' flex flex-col md:flex-row bg-primary px-5 ' id='about'>
        <div className=' py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className= ' md:w-1/2 text-white flex justify-center'>
            <div className='flex flex-col justify-center'>
                <h1  className='text-4xl border-b-4 border-[black] mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5 text-2xl'>Hi, My name is Sakthi </p>
                <p className='text-l' >Thanks for visiting my portfolio! I'm a frontend developer with a passion for building clean, responsive, and user-friendly web apps. I've completed projects like an e-commerce website, a to-do list app, and a weather application, and I'm always looking for new challenges to grow and improve.</p>
            </div>
        </div>
    </section>
}