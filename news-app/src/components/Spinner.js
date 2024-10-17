import React from 'react'

const Spinner = () => {
        return (
            <div class="text-center my-5" style={{overflow: 'hidden'}}>
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
}

export default Spinner