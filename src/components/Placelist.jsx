import React from 'react'

export default function Placelist(props) {
    return (
        <div className='flex flex-col items-center justify-center w-8/12'>
            {
                props.places.map(place => {
                    return (
                        <div key={place.id} className='flex items-center mb-2 border-2'>
                            <div className='w-9/12'>
                                <img className='aspect-square' src={place.image} alt="#" />
                            </div>
                            <div className='m-2 flex flex-col'>
                                <h2 className='text-2xl font-semibold'>{place.name}</h2>
                                <p>{place.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
