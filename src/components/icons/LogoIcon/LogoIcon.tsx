import React from 'react'
import LogoTypes from '../LogoIcon.types'

/**
 * Logo UI component.
 */
export const LogoIcon = ({
  logoType,
  fontSize
}: {
  logoType: string
  fontSize: number
}): JSX.Element => {
  if (
    logoType === 'CLOUDFLARE' ||
    logoType === 'QUALYS' ||
    logoType === 'BEYONDRISK'
  ) {
    return (
      <span
        className={LogoTypes[logoType]}
        style={{ fontSize: `${fontSize}px` }}
      >
        <span className='path1' />
        <span className='path2' />
      </span>
    )
  }

  return (
    <span
      style={{ fontSize: `${fontSize}px` }}
      className={LogoTypes[logoType]}
    />
  )
}
