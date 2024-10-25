// Importing Material-UI icons to be used as category icons
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

// URL for the logo to be used in the application
export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

// Array of categories with names and corresponding icons
export const categories = [
  { name: 'New', icon: <HomeIcon />, }, // Category for new content
  { name: 'JS Mastery', icon: <CodeIcon />, }, // Category for JavaScript mastery
  { name: 'Coding', icon: <CodeIcon />, }, // General coding category
  { name: 'ReactJS', icon: <CodeIcon />, }, // Category for ReactJS content
  { name: 'NextJS', icon: <CodeIcon />, }, // Category for Next.js content
  { name: 'Music', icon: <MusicNoteIcon /> }, // Category for music content
  { name: 'Education', icon: <SchoolIcon />, }, // Category for educational content
  { name: 'Podcast', icon: <GraphicEqIcon />, }, // Category for podcasts
  { name: 'Movie', icon: <OndemandVideoIcon />, }, // Category for movie content
  { name: 'Gaming', icon: <SportsEsportsIcon />, }, // Category for gaming content
  { name: 'Live', icon: <LiveTvIcon />, }, // Category for live content
  { name: 'Sport', icon: <FitnessCenterIcon />, }, // Category for sports content
  { name: 'Fashion', icon: <CheckroomIcon />, }, // Category for fashion content
  { name: 'Beauty', icon: <FaceRetouchingNaturalIcon />, }, // Category for beauty content
  { name: 'Comedy', icon: <TheaterComedyIcon />, }, // Category for comedy content
  { name: 'Gym', icon: <FitnessCenterIcon />, }, // Category for gym-related content
  { name: 'Crypto', icon: <DeveloperModeIcon />, }, // Category for cryptocurrency content
];

// URL for a demo thumbnail image
export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
// URL for a demo channel (for routing in the app)
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
// URL for a demo video (for routing in the app)
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
// Title for the demo channel
export const demoChannelTitle = 'JavaScript Mastery';
// Title for the demo video
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
// URL for a demo profile picture
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png';
