import React from 'react'

import PropTypes from 'prop-types'

import useAutoResize from '../../use/autoResize'

import './style.less'

const BorderBox = ({ children }) => {
  const { width, height, domRef } = useAutoResize()

  return (
    <div className='dv-border-box-2' ref={domRef}>
      <svg className='dv-border-svg-container' width={width} height={height}>
        <polyline
          className='dv-bb2-line1'
          points={`2, 2 ${width - 2} ,2 ${width - 2}, ${height -
            2} 2, ${height - 2} 2, 2`}
        />
        <polyline
          className='dv-bb2-line2'
          points={`6, 6 ${width - 6}, 6 ${width - 6}, ${height -
            6} 6, ${height - 6} 6, 6`}
        />
        <circle cx='11' cy='11' r='1' />
        <circle cx={width - 11} cy='11' r='1' />
        <circle cx={width - 11} cy={height - 11} r='1' />
        <circle cx='11' cy={height - 11} r='1' />
      </svg>
      <div className='border-box-content'>{children}</div>
    </div>
  )
}

BorderBox.propTypes = {
  children: PropTypes.node
}

export default BorderBox