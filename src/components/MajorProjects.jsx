import Project from './Project';
import { majorProjects } from '../constants/constants';

function MajorProjects(props) {
    return (
        <div>
            <p className="text-white text-center font-roboto font-bold text-5xl italic p-4 mt-20">Major Projects</p>
            <div className="grid m-20 gap-4 grid-cols-[repeat(auto-fill,19rem)] sm:grid-cols-[repeat(auto-fill,24rem)] justify-center">
                {majorProjects.map((project) => (
                    <Project key={project.name} setMoreInfo={props.setMoreInfo} projectName={project.name} year={project.year} desc={project.description} moreInfo={project.moreInfo} url={project.url} bannerImage={project.banner} icon={project.icon}/>
                ))}
            </div>
        </div>
    )
}

export default MajorProjects;