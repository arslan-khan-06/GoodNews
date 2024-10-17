import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Placeholders from './Placeholders';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';


const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalArticles, setTotalResults] = useState(0);

    // document.title = `GoodNews - ${capitalizeInitial(props.category)}`;

    const capitalizeInitial = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
        try {
            let data = await fetch(url);
            props.setProgress(50);
            let parsedData = await data.json();
            props.setProgress(80);
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching the news:', error);
            setLoading(false);
        }
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page+1}`;
        try {
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(articles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults);
        } catch (error) {
            console.error('Error fetching the news:', error);
            setLoading(false);
        }
    };
    return (
        <div className='container' style={{marginTop: '100px'}}>
            <h1 className='my-5 text-center'>GoodNews - Top Headlines from {capitalizeInitial(props.category)}</h1>

            {loading ? (
                <div className='row'>
                    <Placeholders />
                    <Placeholders />
                    <Placeholders />
                    <Placeholders />
                    <Placeholders />
                    <Placeholders />
                    <Placeholders />
                    <Placeholders />
                </div>
            ) : (
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalArticles}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className='row'>
                            {articles.length > 0 ? (
                                articles.map((element) => {
                                    return (
                                        <div key={element.url} className='col-md-3'>
                                            <NewsItem
                                                title={element.title ? element.title.slice(0, 45) : ""}
                                                description={element.description ? element.description.slice(0, 88) : ""}
                                                imageUrl={element.urlToImage}
                                                newsUrl={element.url}
                                                author={!element.author ? "Unknown" : element.author}
                                                date={element.publishedAt}
                                            />
                                        </div>
                                    );
                                })
                            ) : (
                                <p>No articles found</p> // If no articles were fetched
                            )}
                        </div>
                    </div>
                </InfiniteScroll>

            )}

            {/* <div className='container d-flex justify-content-center my-5'>
                    <button disabled={page <= 1} type="button" className="btn btn-primary mx-3" onClick={handlePrevClick}>&larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalArticles / props.pageSize)} type="button" className="btn btn-primary mx-3" onClick={handleNextClick}>Next &rarr;</button>
                </div> */}
        </div>
    );
}

export default News;

News.defaultProps = {
    country: 'us',
    pageSize: 12,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
}
