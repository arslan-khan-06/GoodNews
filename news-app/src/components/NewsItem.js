import React from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, author, date } = props
        return (
            <div>
                <div className="card my-3">
                    <img src={!imageUrl ? "https://media.istockphoto.com/id/1323625594/vector/modern-vector-illustration-of-404-error-page-vector-template-for-website-light-bulb-electric.jpg?s=612x612&w=0&k=20&c=BpmrsEZiLwz2EIXmwE0gfMCmNuSl706ZSoPFnruvkas=" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{!imageUrl ? "Content removed" : title + "..."}</h5>
                        <p className="card-text">{!imageUrl ? "This content has been removed and is no longer available." : description + "..."}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author} <br /> {new Date(date).toGMTString()}</small></p>
                        <a target='_blank' href={newsUrl} rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }

export default NewsItem