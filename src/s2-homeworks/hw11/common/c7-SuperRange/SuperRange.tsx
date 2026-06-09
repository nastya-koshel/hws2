import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                width: '150px',
                '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    backgroundColor: 'white',
                    border: '1px solid #00CC22',
                    boxShadow: 'none !important',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        width: 6,
                        height: 6,
                        backgroundColor: '#00CC22',
                        margin: 'auto',
                        boxShadow: 'none !important',
                    },

                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                    opacity: 1,
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
