import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Placeholders from './Placeholders';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';


export class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 12,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number
    }

    capitalizeInitial = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [], // Start with an empty array
            loading: true, // Add a loading state
            page: 1,
            totalArticles: 0
        };
        document.title = `GoodNews - ${this.capitalizeInitial(this.props.category)}`;
    }

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        try {
            let data = await fetch(url);
            this.props.setProgress(50);
            let parsedData = await data.json();
            this.props.setProgress(80);
            this.setState({ articles: parsedData.articles, loading: false, totalArticles: parsedData.totalResults });
        } catch (error) {
            console.error('Error fetching the news:', error);
            this.setState({ loading: false });
        }
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    // handlePrevClick = async () => {
    //     this.setState({
    //         page: this.state.page - 1
    //     })
    //     this.updateNews();
    // }

    // handleNextClick = async () => {
    //     this.setState({
    //         page: this.state.page + 1
    //     })
    //     this.updateNews();
    // }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        try {
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ articles: this.state.articles.concat(parsedData.articles), loading: false, totalArticles: parsedData.totalResults });
        } catch (error) {
            console.error('Error fetching the news:', error);
            this.setState({ loading: false });
        }
    };

    render() {
        return (
            <div className='container'>
                <h1 className='my-5 text-center'>GoodNews - Top Headlines from {this.capitalizeInitial(this.props.category)}</h1>

                {this.state.loading ? (
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
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalArticles}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className='row'>
                                {this.state.articles.length > 0 ? (
                                    this.state.articles.map((element) => {
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
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary mx-3" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} type="button" className="btn btn-primary mx-3" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </div>
        );
    }
}

export default News;
