import CriShouxLogo from './CriShouxLogo';
import YouTube from '../assets/icons/YouTube.svg'
import Twitter from '../assets/icons/Twitter.svg'
import Roblox from '../assets/icons/Roblox.svg'
import GitHub from '../assets/icons/GitHub.svg'

function Social(props) {
    return (
        <a href={props.url} target="_blank" className={`${props.className} mr-5`}>
            <img src={props.imgSrc} alt={props.alt} className="w-[25px] h-[25px] sm:w-[32px] sm:h-[32px]"></img>
        </a>
    )
}

function TopBar(props) {
    return (
        <div className="h-[70px] flex bg-[rgb(25,25,25)] items-center w-full fixed top-0 z-50">
            {/* Left margin. */}
            <div className="w-0 sm:w-1/12"></div>

            {/* Left side content. */}
            <CriShouxLogo className="w-[70px] h-[70px]"/>
            <h1 className="text-white font-product-sans font-bold text-2xl sm:text-3xl">CRISHOUX</h1>

            {/* Right side content. */}
            <Social url="https://www.roblox.com/users/57116727/profile" imgSrc={Roblox} alt="Roblox" className="ml-auto"/>
            <Social url="https://github.com/ShouxTech" imgSrc={GitHub} alt="GitHub"/>
            <Social url="https://twitter.com/cri_shoux" imgSrc={Twitter} alt="Twitter"/>
            <Social url="https://www.youtube.com/crishoux" imgSrc={YouTube} alt="YouTube"/>

            {/* Right margin. */}
            <div className="w-0 sm:w-1/12"></div>
        </div>
    )
}

export default TopBar;