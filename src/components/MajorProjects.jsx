import Project from './Project';
import OHBanner from '../assets/OHBanner.png'
import OHLogo from '../assets/OHLogo.png'
import AtlasBanner from '../assets/AtlasBanner.png'
import AtlasLogo from '../assets/AtlasLogo.png'
import RDBanner from '../assets/RDBanner.png'
import RDLogo from '../assets/RDLogo.png'

function MajorProjects(props) {
    return (
        <div>
            <p className="text-white text-center font-roboto font-bold text-5xl italic p-4">Major Projects</p>
            {/* <div className="h-24"></div> */}
            <div className="grid m-20 gap-4 grid-cols-[repeat(auto-fill,19rem)] sm:grid-cols-[repeat(auto-fill,24rem)] justify-center">
                <Project projectName="Rogue Demon" year="2022" bannerImage={RDBanner} icon={RDLogo}/>
                <Project projectName="Atlas" year="2021" bannerImage={AtlasBanner} icon={AtlasLogo}/>
                <Project projectName="Owl Hub" year="2019" bannerImage={OHBanner} icon={OHLogo}/>
            </div>
        </div>
    )
}

export default MajorProjects;