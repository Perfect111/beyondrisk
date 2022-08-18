import React from 'react'
import IconTypes from '../ActionIcon.types'

import './ActionIconsList.scss'
import ActionIcon from '../ActionIcon/ActionIcon'

/**
 * Action Icons Preview.
 */
const ActionIconsList = ({ color, fontSize }) => {
  const iconTypesList = Object.keys(IconTypes).map((iconType) => (
    <div key={iconType} className='action-icon-holder'>
      <ActionIcon iconType={iconType} color={color} fontSize={fontSize} />
      <code className='action-icon-type'>{`IconTypes.${iconType}`}</code>
      <code
        onClick={() => {
          navigator.clipboard.writeText(
            `<span className="${IconTypes[iconType]}"/>`
          )
        }}
        className='action-icon-code'
      >
        {`<span className="${IconTypes[iconType]}"/>`}
      </code>
    </div>
  ))

  return <div className='action-icons-list-wrapper'>{iconTypesList}</div>
}

export default ActionIconsList
