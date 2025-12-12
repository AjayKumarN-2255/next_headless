import React from 'react'
import Searchbar from './Searchbar'

function LatestPosts() {
    return (
        <div className='mb-8'>
            <div className='flex items-center justify-between'>
                <h2 className='text-xl mb-4'>Latest Posts</h2>
                <div>
                    <Searchbar />
                </div>
            </div>
        </div>
    )
}

export default LatestPosts