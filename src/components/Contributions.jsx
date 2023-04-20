import Project from './Project';
import ARSBanner from '../assets/contributions/ARSBanner.png'
import ARSLogo from '../assets/contributions/ARSLogo.png'

function Contributions(props) {
    return (
        <div>
            <p className="text-white text-center font-roboto font-bold text-5xl italic p-4 mt-20">Contributions</p>
            <div className="grid m-20 gap-4 grid-cols-[repeat(auto-fill,19rem)] sm:grid-cols-[repeat(auto-fill,24rem)] justify-center">
                <Project projectName="ars.red" year="2018" desc="Cheat script for Apocalypse Rising 2 on Roblox. Over 1,000 buyers." url="https://ars.red" bannerImage={ARSBanner} icon={ARSLogo}/>
            </div>
        </div>
    )
}

export default Contributions;