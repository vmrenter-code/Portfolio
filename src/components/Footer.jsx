import React from 'react'

const Footer = () => {
    return ( 
        <footer className = 'mt-8 border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white' >

            <div className ='container p-4 md:p-12 justify-between flex flex-col items-center gap-4'>

                <div className = 'text-white text-3xl font-black cursor-pointer'>
                    PORTFOLIO<span className = 'text-primary'></span>
                </div>

                <p className = 'text-slate-600'>
                    All Rights Reserved.
                </p>

            </div>
        </footer>
    )
}

export default Footer