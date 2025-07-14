import PropTypes from 'prop-types'
import React from 'react'

const BlurBlob = ({position,size}) => {

     const { top, left } = position
  const { width, height } = size 

  return (
    <div className='absolute'
    style = {{
        top:top,
        left:left,
        width:width,
        height:height,
        transform:'translate(-50%,-50%)',
    }}
    >
        <div className='w-full h-full bg-purple-500 rounded-b-full opacity-20 blur-3xl animate-blob'>

        </div>
    </div>
  )
}

//Dfine Proop
BlurBlob.prototype = {
    position:PropTypes.shape({
        top : PropTypes.string,
        left : PropTypes.string,
    }),
    size : PropTypes.shape({
        width : PropTypes.string,
        height : PropTypes.string,
    })
}

export default BlurBlob