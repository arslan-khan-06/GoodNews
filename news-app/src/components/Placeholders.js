import React, { Component } from 'react'

export class Placeholders extends Component {
    render() {
        return (
            <div className='col-md-3 my-3'>
                <div className="card" aria-hidden="true">
                    <img src="https://plainbackground.com/plain1024/abaaa5.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                        </p>
                        <button className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Placeholders