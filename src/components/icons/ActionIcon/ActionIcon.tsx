import React from 'react'

import IconTypes from '../ActionIcon.types'

/**
 * Icon UI component.
 */

const ActionIcon = ({
  iconType,
  color,
  fontSize
}: {
  iconType: string
  color: string
  fontSize: number
}): JSX.Element => {
  return (
    <span
      style={{ fontSize: `${fontSize}px`, color }}
      className={IconTypes[iconType]}
    />
  )
}

export default ActionIcon
