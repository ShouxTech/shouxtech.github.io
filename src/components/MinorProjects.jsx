import Project from './Project';
import RLBanner from '../assets/minor-projects/RLBanner.png'
import RLLogo from '../assets/minor-projects/RLLogo.png'
import ROCBanner from '../assets/minor-projects/ROCBanner.png'
import ROCLogo from '../assets/minor-projects/ROCLogo.png'
import MMBanner from '../assets/minor-projects/MMBanner.png'
import MMLogo from '../assets/minor-projects/MMLogo.png'

function MinorProjects(props) {
    return (
        <div>
            <p className="text-white text-center font-roboto font-bold text-5xl italic p-4 mt-20">Minor Projects</p>
            <div className="grid m-20 gap-4 grid-cols-[repeat(auto-fill,19rem)] sm:grid-cols-[repeat(auto-fill,24rem)] justify-center">
                <Project projectName="Remory Lane" year="2022" desc="A hub of your personal Roblox nostalgia. Memory lane." url="https://crishoux.com/remory-lane/" bannerImage={RLBanner} icon={RLLogo}/>
                <Project projectName="Roblox Outfit Copier" year="2022" desc="Copy another Roblox player's outfit on to your avatar at the click of a button." url="https://github.com/ShouxTech/roblox-outfit-copier" bannerImage={ROCBanner} icon={ROCLogo}/>
                <Project projectName="Mineman" year="2022" desc="A cheat for Minecraft." url="https://www.youtube.com/watch?v=aA_p9PJYg0s" bannerImage={MMBanner} icon={MMLogo}/>
            </div>
        </div>
    )
}

export default MinorProjects;