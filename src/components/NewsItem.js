import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageurl, newsUrl, author, date } = props;
    const themes = () => {
        if (props.mode === 'dark') {
            document.body.style.color = 'white';
        }
        else {
            document.body.style.color = 'black';
        }
    }
    return (
        <div className='my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div className="card">
                <img src={imageurl} className="card-img-top" alt="..." />
                <div className="card-body" themes={themes()}>
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}
export default NewsItem
