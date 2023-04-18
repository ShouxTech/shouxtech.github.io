function Project(props) {
    return (
        <div className="w-full h-72 bg-zinc-700 rounded overflow-hidden shadow-lg">
            {/* Banner is 384x128 */}
            <div className="grid">
                <img src={props.bannerImage} alt="Banner" className="bg-zinc-500 w-full h-32 blur-[2px] col-[1] row-[1]"></img> 
                <p className="text-white font-roboto rounded bg-gray-700 border border-zinc-500 z-10 w-fit h-fit p-1 col-[1] row-[1] justify-self-end mr-2 mt-2">{props.year}</p>
                <img src={props.icon} alt="Icon" className="bg-zinc-800 w-20 h-20 rounded border z-10 col-[1] row-[1] border-zinc-500 p-2 ml-3 mt-[70px]"></img>
            </div>
            <h3 className="text-white font-roboto font-bold text-xl ml-3 mt-3">{props.projectName}</h3>
        </div>
    )
}

export default Project;