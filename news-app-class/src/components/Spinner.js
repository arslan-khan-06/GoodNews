import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div class="text-center my-5" style={{overflow: 'hidden'}}>
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Spinner