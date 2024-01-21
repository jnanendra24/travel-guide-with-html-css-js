import React from 'react'

export default function Placelist(props) {
    return (
            <div className='flex flex-col items-center w-8/12'>
                {
                    props.places.map(place => {
                        return (
                            <div key={place.id} className='grid grid-cols-4 grid-rows-2 gap-2 w-fit items-center'>
                                <img className="row-span-2 aspect-square" src={place.image} alt="#" />
                                <h2 className='col-span-3 text-3xl'>{place.name}</h2>
                                <p className="max-h-fit col-span-3">{place.description}</p>
                            </div>
                        )
                    })
                }
            </div>
    )
}
