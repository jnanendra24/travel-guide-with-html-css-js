import React, { useEffect, useState } from 'react'
import Placelist from './Placelist'

export default function Home() {
    const [places, setPlaces] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(null)
    const fetchPlaces = async () => {
        try {
            const res = await fetch("http://localhost:5000/places")
            const data = await res.json()
            setIsLoading(false)
            setPlaces(data)
        }
        catch(err) {
            setIsLoading(false)
            setIsError(err.message)
        }
    }
    useEffect(() => {
        fetchPlaces()
    }, [])
    return (
        <div className='flex justify-center m-4'>
            {
                (isLoading && <h2>Loading...</h2>) ||
                (isError && <h2>Error while fetching data</h2>) ||
                (places && <Placelist places={places} />)
            }
        </div>
    )
}
