import CriShouxLogo from './CriShouxLogo';
import YouTube from '../assets/icons/YouTube.svg'
import Twitter from '../assets/icons/Twitter.svg'
import Roblox from '../assets/icons/Roblox.svg'

function TopBar(props) {
    return (
        <div className="h-[70px] flex bg-[rgb(25,25,25)] items-center w-full fixed top-0 z-50">
            <CriShouxLogo className="w-[70px] h-[70px]"/>
            <h1 className="text-white font-product-sans font-bold text-2xl sm:text-3xl">CRISHOUX</h1>
            <a href="https://www.roblox.com/users/57116727/profile" className="ml-auto mr-5">
                <img src={Roblox} alt="Roblox" className="w-[25px] h-[25px] sm:w-[32px] sm:h-[32px]"></img>
            </a>
            <a href="https://twitter.com/cri_shoux" className="mr-5">
                <img src={Twitter} alt="Twitter" className="w-[25px] h-[25px] sm:w-[32px] sm:h-[32px]"></img>
            </a>
            <a href="https://www.youtube.com/crishoux" className="mr-5">
                <img src={YouTube} alt="YouTube" className="w-[25px] h-[25px] sm:w-[32px] sm:h-[32px]"></img>
            </a>
        </div>
    )
}

export default TopBar;