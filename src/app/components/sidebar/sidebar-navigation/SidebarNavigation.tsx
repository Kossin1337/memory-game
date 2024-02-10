import React from 'react'

import StatisticsIcon from './icons/StatisticsIcon'
import DecksIcon from './icons/DecksIcon'

import chartGif from './gifs/chart.gif'
import diamondGif from './gifs/diamond.gif'

import './SidebarNavigation.scss'

const SidebarNavigation = () => {
  return (
    <div className='sidebar-navigation'>
        <div className="sidebar-item">
            {/* <DecksIcon /> */}
            <img src={require('./gifs/chart.gif')} alt="animated diamond" />
            {/* <img src="/animated-diamond.gif" alt="animated diamond" /> */}

        </div>
        <div className="sidebar-item">
            {/* <StatisticsIcon /> */}
            <img src={require('./gifs/diamond.gif')} alt="animated linechart" />
            {/* <StatisticsAnimation /> */}
        </div>
        <div className="sidebar-item"></div>
        <div className="sidebar-item"></div>
    </div>
  )
}

export default SidebarNavigation