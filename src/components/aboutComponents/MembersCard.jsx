import React from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const MembersCard = ({name, role, image, bio, achievement}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img src={image} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <h3 className="mb-2 text-lg font-bold tracking-tight text-purple-500">{role}</h3>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{bio}</p>
            <span className="bg-blue-100 inline-flex items-center gap-2 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><EmojiEventsIcon fontSize='extra-small'/>
            {achievement}</span>
        </div>
    </div>

  )
}

export default MembersCard