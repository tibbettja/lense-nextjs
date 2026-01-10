'use client'

import * as React from 'react'

const reducer = (state, { length, newValue }) => {
    if (newValue) return newValue
    else return (state + 1) % length
}


const Carousel = ({ images, speed }) => {

    const rotationSpeed = 1000 * speed

    const [displayedImage, setDisplayedImage] = React.useReducer(reducer, 0)

    React.useEffect(() => {
        if (Array.isArray(images) && images.length > 1) {
            const interval1 = setInterval(() => {
                setDisplayedImage({ length: images.length })
            }, rotationSpeed)
            return () => {
                clearInterval(interval1)
            }
        }
    }, [images.length])

    return (
        <React.Fragment key={JSON.stringify(images)}>
            <img
                src={images[displayedImage % images.length]}
                alt={images[displayedImage % images.length]}
                style={{ width:'100%', height: 'auto' }}
            />
        </React.Fragment>
    )
}

export default Carousel