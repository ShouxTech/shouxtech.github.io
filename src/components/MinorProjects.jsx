import Project from './Project';
import RLBanner from '../assets/minor-projects/RLBanner.png'
import RLLogo from '../assets/minor-projects/RLLogo.png'

function MinorProjects(props) {
    return (
        <div>
            <p className="text-white text-center font-roboto font-bold text-5xl italic p-4 mt-20">Minor Projects</p>
            <div className="grid m-20 gap-4 grid-cols-[repeat(auto-fill,19rem)] sm:grid-cols-[repeat(auto-fill,24rem)] justify-center">
                <Project projectName="Remory Lane" year="2022" desc="A hub of your personal Roblox nostalgia. Memory lane." url="https://crishoux.com/remory-lane/" bannerImage={RLBanner} icon={RLLogo}/>
            </div>
        </div>
    )
}

export default MinorProjects;