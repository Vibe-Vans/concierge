import React from 'react'
import Texty from 'rc-texty'

const Driver = (props) => {

    return (
        <div className='shape tile_3rd'>
            <div className='data_place'>
                <Texty
                    type='scaleY'
                    mode='smooth'
                    style={{ fontSize: '1.5rem', marginBottom: '15px' }}>
                        {'driver: '  +  props.driver.driver.driverName}
                </Texty>

            </div>
          
        </div>
    )

}

export default Driver
