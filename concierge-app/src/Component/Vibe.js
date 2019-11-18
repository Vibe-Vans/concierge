import React from 'react'
import Texty from 'rc-texty'

const Vibe = (props) => {

    return(
        <div className='shape tile_4th'>
            <div className="data_place">

                <Texty
                    type='scaleY'
                    mode='smooth'
                    style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
                        {'vibe: '  +  props.vibe.vibe.vibeName}
                </Texty>
            </div>
       
    </div>

    )
    
}

export default Vibe