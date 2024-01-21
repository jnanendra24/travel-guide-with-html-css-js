import React from 'react'

export default function Contactus() {
    return (
        <div className='flex w-full justify-around absolute bottom-0 bg-black text-white p-2'>
            <div className=' flex flex-col items-start'>
                <h4 className='text-xl'>Contact us</h4>
                <span>(123) 456 7890</span>
                <span>escanor1235@proton.me</span>
            </div>
            <div className=' flex flex-col items-start'>
                <h4 className='text-xl'>Our Location</h4>
                <span>123 Anywhere St., Any City</span>
                <span>State, Country 12345</span>
            </div>
            <div className=' flex flex-col items-start'>
                <h4 className='text-xl'>FOLLOW US ON</h4>
                <span>@travel guru</span>
            </div>
        </div>
    )
}
