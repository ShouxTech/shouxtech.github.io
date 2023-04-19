import Project from './Project';
import OHBanner from '../assets/major-projects/OHBanner.png'
import OHLogo from '../assets/major-projects/OHLogo.png'
import AtlasBanner from '../assets/major-projects/AtlasBanner.png'
import AtlasLogo from '../assets/major-projects/AtlasLogo.png'
import RDBanner from '../assets/major-projects/RDBanner.png'
import RDLogo from '../assets/major-projects/RDLogo.png'
import COVBanner from '../assets/major-projects/COVBanner.png'
import COVLogo from '../assets/major-projects/COVLogo.png'

function MajorProjects(props) {
    return (
        <div>
            <p className="text-white text-center font-roboto font-bold text-5xl italic p-4 mt-20">Major Projects</p>
            <div className="grid m-20 gap-4 grid-cols-[repeat(auto-fill,19rem)] sm:grid-cols-[repeat(auto-fill,24rem)] justify-center">
                <Project projectName="Rogue Demon" year="2022" desc="A battleground experience based on Demon Slayer. Over 100,000,000 visits and over 100,000 group members." url="https://www.roblox.com/games/9103898828/Rogue-Demon" bannerImage={RDBanner} icon={RDLogo}/>
                <Project projectName="Atlas" year="2021" desc="An external (different from a script) software cheat for the Roblox client. Primarily universal aimbot and ESP." bannerImage={AtlasBanner} icon={AtlasLogo}/>
                <Project projectName="City of Vancouver V1" year="2020" desc="A city experience. I was the main (and only) scripter for a year. The group has now moved on to V2 which I contributed to." url="https://www.roblox.com/groups/5530527/City-of-Vancouver-Canada" bannerImage={COVBanner} icon={COVLogo}/>
                <Project projectName="Owl Hub" year="2019" desc="Widely known and used cheating script for a multitude of games on the Roblox platform." bannerImage={OHBanner} icon={OHLogo}/>
            </div>
        </div>
    )
}

export default MajorProjects;