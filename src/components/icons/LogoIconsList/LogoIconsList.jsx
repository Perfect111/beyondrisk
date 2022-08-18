import React from 'react'
import LogoTypes from '../LogoIcon.types'
import { LogoIcon } from '../LogoIcon/LogoIcon'
import './LogoIconsList.scss'

/**
 * Logo Icons Preview.
 */
export const LogoIconsList = ({ color, fontSize }) => {
  const logoTypesList = Object.keys(LogoTypes).map((logoType) => (
    <span key={logoType} className='logo-icon-holder'>
      <div className='logo-icon-block'>
        <LogoIcon logoType={logoType} fontSize={fontSize} />
      </div>
      <code className='logo-icon-type'>{`LogoTypes.${logoType}`}</code>
      <code
        onClick={() => {
          navigator.clipboard.writeText(
            `<span className="${LogoTypes[logoType]}"/>`
          )
        }}
        className='logo-icon-code'
      >
        {`<span className="${LogoTypes[logoType]}"/>`}
      </code>
    </span>
  ))

  return <div className='logo-icons-list-wrapper'>{logoTypesList}</div>
}
