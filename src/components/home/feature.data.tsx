import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Enhanced Coding Skills',
    description:
      'Our 10-day coding course sharpens programming abilities through hands-on projects and expert guidance, improving proficiency in coding languages and providing practical experience.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'More Affordable Cost',
    description:
      'Our 10-day coding and college admissions preparation course offers excellent value at an affordable price. Gain valuable skills and a competitive advantage without straining your budget',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Comprehensive College Application Support',
    description:
      'The course offers guidance in writing personal statements, interview preparation, understanding admissions criteria, and strategic college selection to increase admission chances.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Networking and Collaboration',
    description:
      'Participants connect with like-minded peers, fostering collaborations, sharing resources, and building a supportive network for future academic and professional endeavors.',
    icon: <ContactSupportIcon />,
  },
]
