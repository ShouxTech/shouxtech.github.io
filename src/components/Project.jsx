import NewTab from '../assets/icons/NewTab.svg'

function Project(props) {
    return (
        <div className="w-full h-[360px] bg-zinc-700 rounded overflow-hidden shadow-lg relative">
            {/* Banner is 384x128 */}
            <div className="grid">
                <img src={props.bannerImage} alt="Banner" className="bg-zinc-500 w-full h-32 blur-[2px] col-[1] row-[1] object-cover"></img> 
                <p className="text-white font-roboto rounded bg-gray-700 border border-zinc-500 z-10 w-fit h-fit p-1 col-[1] row-[1] justify-self-end mr-2 mt-2">{props.year}</p>
                <img src={props.icon} alt="Icon" className="bg-zinc-800 w-20 h-20 rounded border z-10 col-[1] row-[1] border-zinc-500 p-2 ml-3 mt-[70px]"></img>
            </div>
            <h3 className="text-white font-roboto font-bold text-xl ml-3 mt-3">{props.projectName}</h3>
            <p className="text-zinc-300 font-roboto pl-3 pr-3 mt-2">{props.desc}{props.moreInfo && <span> <span className='text-gray-400 cursor-pointer' tabIndex={0} onClick={() => props.setMoreInfo(props)}>Show more...</span></span>}</p>
            {props.url &&
                <a className="ml-3 bottom-3 block absolute" target="_blank" href={props.url}>
                    <img src={NewTab} className="w-[25px] h-[25px] inline"></img>
                    <p className="inline ml-2 font-roboto text-zinc-400">Visit</p>
                </a>
            }
        </div>
    )
}

export default Project;