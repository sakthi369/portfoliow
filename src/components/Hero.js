import HeroImg from '../assets/home.png'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";
export default function Hero(){
    return<section className="flex flex-col md:flex-row  px-5 py-32 bg-secondary justify-center " id='hero'>
        <div className=" md:w-1/2 flex flex-col pr-30 " >
          <h1  className=" text-white text-6xl text-center ">Hi I am Sakthi </h1> 
          <h2 className=" text-white text-2xl text-center  text-stroke">I,m a  Frontend Developer</h2>
          <div className="flex justify-center ">
            <a href="#" className="soc-button"><AiOutlineTwitter /></a>
            <a href="#" className="soc-button"><AiOutlineFacebook /></a>
            <a href="https://www.linkedin.com/in/sakthi-s-436850356/" className="soc-button"><AiOutlineLinkedin /></a>
            <a href="https://github.com/sakthi369" className="soc-button"><AiOutlineGithub /></a>
          </div>
        </div>
          <div className="home-img justify-center md:w-1/3">
            <div className="img-box">
                <div className="img-item">
                <img src={HeroImg}/>
                </div>
            </div>
        </div>
        
       
    </section>
}