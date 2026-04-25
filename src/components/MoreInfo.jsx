import NewTab from '../assets/icons/NewTab.svg'

function MoreInfo(props) {
    return (
        <div className="fixed z-50 left-0 top-0 w-full h-full overflow-hidden bg-black/60 flex justify-center items-center" onClick={() => props.setMoreInfo(undefined)}>
            <div className="lg:w-[35%] w-[80%] max-h-[90vh] pb-3 bg-zinc-700 rounded overflow-y-auto overflow-x-hidden shadow-lg relative" onClick={(e) => e.stopPropagation()}>
                {/* Banner is 384x128 */}
                <div className="grid">
                    <img src={props.bannerImage} alt="Banner" className="bg-zinc-500 w-full h-32 blur-[2px] col-[1] row-[1] object-cover"></img> 
                    <p className="text-white font-roboto rounded bg-gray-700 border border-zinc-500 z-10 w-fit h-fit p-1 col-[1] row-[1] justify-self-end mr-2 mt-2">{props.year}</p>
                    <img src={props.icon} alt="Icon" className="bg-zinc-800 w-20 h-20 rounded border z-10 col-[1] row-[1] border-zinc-500 p-2 ml-3 mt-[70px]"></img>
                </div>

                <h3 className="text-white font-roboto font-bold text-xl ml-3 mt-3">{props.projectName}</h3>
                <p className="text-zinc-400 font-roboto pl-3 pr-3 mt-2">{props.desc}</p>
                <p className="text-zinc-300 font-roboto pl-3 pr-3 mt-2">{props.moreInfo}</p>

                {props.url &&
                    <a className="ml-3 mt-3 flex items-center w-fit" target="_blank" href={props.url}>
                        <img src={NewTab} className="w-[25px] h-[25px]"></img>
                        <p className="ml-2 font-roboto text-zinc-400">Visit</p>
                    </a>
                }
            </div>
        </div>
    );
}

export default MoreInfo;