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
        description: 'A battleground game based on Demon Slayer. Over 600,000,000 visits and over 1,000,000 group members.',
        moreInfo: 'As a main programmer for this game, my work spanned many aspects of the product, with a focus on the backend and UI. Some large features of this game I developed: anti-cheat (quite strong because of my exploiting experience), data saving and interfacing, mobile support, gamepad support, product gifting, ranked play, emotes, shop, community-curated outfits, achievements. To name a few smaller areas I developed: leaderboard, inventory. To allow moderators to easily take action against players in-game, I created a Discord bot that communicated with game servers using Roblox\'s Open Cloud API to deploy bans and similar data modifications in real-time.',
        url: 'https://www.roblox.com/games/9103898828/Rogue-Demon',
        icon: RDLogo,
        banner: RDBanner,
    },
    {
        name: 'Atlas',
        year: '2021',
        description: 'A standalone executable cheat for the Roblox client. Primarily a universal aimbot and ESP.',
        moreInfo: 'Initially, Atlas was an external program using Windows APIs to interact with the Roblox client. To simplify memory access, it later became an internal DLL that would be injected into the Roblox client to function as cheating software. Atlas was primarily a universal aimbot and ESP at its launch, but it featured more advanced capabilities later in its life, such as flying abilities and Lua code execution in the target game. During the development of this, I learned many details about Windows architecture. Many users reported the experience of this software was better than using traditional scripts due to better performance (less lag).',
        icon: AtlasLogo,
        banner: AtlasBanner,
    },
    {
        name: 'City of Vancouver V1',
        year: '2020',
        description: 'A city-based game. I was the main (and only) scripter for a year. The group has now moved on to V2 which I have made significant contributions to.',
        moreInfo: 'This project was one of my most significant learning experiences, particularly in vehicle mechanics and physics simulation. I researched real-world chassis design and the fascinating process of turning engine power into wheel rotation. I engineered a custom vehicle chassis, balancing realistic simulation with engaging gameplay. For example, accurately simulating the differing behaviors of AWD, FWD, and RWD drivetrains was incredibly rewarding to see in action.',
        url: 'https://www.roblox.com/groups/5530527/City-of-Vancouver-Canada',
        icon: COVLogo,
        banner: COVBanner,
    },
    {
        name: 'Owl Hub',
        year: '2019',
        description: 'Widely known and used cheating script for a multitude of games on the Roblox platform.',
        moreInfo: 'This project accelerated my involvement in Roblox and received significant positive attention from the exploiting community. I iterated through multiple UI updates until I was satisfied with the final design of Owl Hub, balancing aesthetics with ease of use. Continuous updates to fix features and bypass anti-cheat detections were made on many of the games Owl Hub supported. In the end, Owl Hub supported over 40 games.',
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
import PTLogo from '../assets/minor-projects/PTLogo.png'
import PTBanner from '../assets/minor-projects/PTBanner.png'

export const minorProjects = [
    {
        name: 'penguintrack',
        year: '2024',
        description: 'View the stats of all your favorite Club Penguin Private Servers at a glance.',
        url: 'https://penguintrack.com/',
        icon: PTLogo,
        banner: PTBanner,
    },
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
        description: 'Copy another Roblox player\'s outfit onto your avatar with the click of a button.',
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

import RNBanner from '../assets/contributions/RNBanner.png'
import RNLogo from '../assets/contributions/RNLogo.png'

export const contributions = [
    {
        name: 'Rogue Ninja',
        year: '2023',
        description: 'A PvP combat game similar to Rogue Demon, based on Naruto.',
        icon: RNLogo,
        banner: RNBanner,
    },
];

import BHBanner from '../assets/work/BHBanner.png'
import BHLogo from '../assets/work/BHLogo.png'

export const work = [
    {
        name: 'Brookhaven',
        year: '2026',
        description: 'The largest game on Roblox.',
        url: 'https://www.roblox.com/games/4924922222/Brookhaven-RP',
        icon: BHLogo,
        banner: BHBanner,
    },
];