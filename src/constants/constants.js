import OHBanner from '../assets/major-projects/OHBanner.png'
import OHLogo from '../assets/major-projects/OHLogo.png'
import AtlasBanner from '../assets/major-projects/AtlasBanner.png'
import AtlasLogo from '../assets/major-projects/AtlasLogo.png'
import RDBanner from '../assets/major-projects/RDBanner.png'
import RDLogo from '../assets/major-projects/RDLogo.png'
import COVBanner from '../assets/major-projects/COVBanner.png'
import COVLogo from '../assets/major-projects/COVLogo.png'

export const majorProjects = [
    {
        name: 'Rogue Demon',
        year: '2022',
        description: 'A battleground experience based on Demon Slayer. Over 100,000,000 visits and over 100,000 group members.',
        moreInfo: 'As a main programmer for this experience, I have done much work on the backend and UI. Some large features of this game I developed: anti-cheat (quite strong because of my exploiting experience), mobile support, gamepad support, product gifting, ranked play, emotes, shop. To name a few smaller areas I developed: leaderboard, inventory, data saving. To allow for moderators to easily take action against players in-game, I also created a Discord bot that can communicate instantly to game servers with Roblox\'s Open Cloud API to deploy bans and similar data modifications in real-time.',
        url: 'https://www.roblox.com/games/9103898828/Rogue-Demon',
        icon: RDLogo,
        banner: RDBanner,
    },
    {
        name: 'Atlas',
        year: '2021',
        description: 'An external software cheat for the Roblox client (different from a script). Primarily universal aimbot and ESP.',
        moreInfo: 'At first, an external program using Windows methods to interact with the Roblox client. Later, an internal DLL that would be injected into the Roblox client to function as cheating software. Switched to an a DLL because it allowed for easier memory access of the Roblox client. Primarily universal aimbot and ESP at its launch, however, featured more interesting features later in its life such as flying abilities and lua code execution in the target experience. During the development of this, I learned many details about Windows architecture. Many users reported the experience of this software was better than using traditional scripts due to better performance (less lag).',
        icon: AtlasLogo,
        banner: AtlasBanner,
    },
    {
        name: 'City of Vancouver V1',
        year: '2020',
        description: 'A city experience. I was the main (and only) scripter for a year. The group has now moved on to V2 which I have made significant contributions to.',
        moreInfo: 'Maybe one of the projects where I learned the most things. One of the most notable areas I learned about were cars due to the nature of the game. I learned about the real chassis of a car and physics concepts involved in getting a car to drive and how the engine produces rotational motion and sends it to the wheels. Using this knowledge, I constructed the vehicle chassis for the game carefully and tuned it to be realistic, but also fun. One of the interesting things I noticed were the differences in handling of an AWD vs FWD vs RWD car in the game.',
        url: 'https://www.roblox.com/groups/5530527/City-of-Vancouver-Canada',
        icon: COVLogo,
        banner: COVBanner,
    },
    {
        name: 'Owl Hub',
        year: '2019',
        description: 'Widely known and used cheating script for a multitude of games on the Roblox platform.',
        moreInfo: 'This project accelerated my involvement in Roblox. It received a lot of positive attention from the exploiting community and I kept working to improve it. I did multiple UI updates until I was finally satisfied with the final UI that Owl Hub ended on as it was nice to see and easy to use. Continuous updates to fix features and bypass anti cheat detections were made on many of the games Owl Hub supported. In the end, Owl Hub supported over 40 games.',
        icon: OHLogo,
        banner: OHBanner,
    },
];

import RLBanner from '../assets/minor-projects/RLBanner.png'
import RLLogo from '../assets/minor-projects/RLLogo.png'
import ROCBanner from '../assets/minor-projects/ROCBanner.png'
import ROCLogo from '../assets/minor-projects/ROCLogo.png'
import MMBanner from '../assets/minor-projects/MMBanner.png'
import MMLogo from '../assets/minor-projects/MMLogo.png'
import BPLogo from '../assets/minor-projects/BPLogo.png'
import BPBanner from '../assets/minor-projects/BPBanner.png'

export const minorProjects = [
    {
        name: 'Bitmoji Picker',
        year: '2023',
        description: 'Use any Bitmoji sticker right from your desktop.',
        url: 'https://www.youtube.com/watch?v=TuUocXjquV4',
        icon: BPLogo,
        banner: BPBanner,
    },
    {
        name: 'Remory Lane',
        year: '2022',
        description: 'A hub of your personal Roblox nostalgia. Memory lane.',
        url: 'https://crishoux.com/remory-lane/',
        icon: RLLogo,
        banner: RLBanner,
    },
    {
        name: 'Roblox Outfit Copier',
        year: '2022',
        description: 'Copy another Roblox player\'s outfit on to your avatar with the click of a button.',
        url: 'https://github.com/ShouxTech/roblox-outfit-copier',
        icon: ROCLogo,
        banner: ROCBanner,
    },
    {
        name: 'Mineman',
        year: '2022',
        description: 'A cheat for Minecraft.',
        url: 'https://www.youtube.com/watch?v=aA_p9PJYg0s',
        icon: MMLogo,
        banner: MMBanner,
    },
];

import ARSBanner from '../assets/contributions/ARSBanner.png'
import ARSLogo from '../assets/contributions/ARSLogo.png'

export const contributions = [
    {
        name: 'ars.red',
        year: '2018',
        description: 'Cheat script for Apocalypse Rising 2 on Roblox. Over 1,000 buyers.',
        icon: ARSLogo,
        banner: ARSBanner,
    },
];