import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [glowing, setGlowing] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateNewsPage = async () => {
        props.setProgress(0);
        const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${setPage.page}&pagesize=${props.pagesize}`;
        setGlowing({ glowing: true });
        let data = await fetch(url);
        props.setProgress(40);
        let parseData = await data.json();
        props.setProgress(70);

        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setGlowing(false)

        props.setProgress(100);
    }
    function themes() {
        if (props.mode === 'dark') {
            document.body.style.color = 'white';
        }
        else {
            document.body.style.color = 'black';
        }
    }
    useEffect(() => {
        updateNewsPage();
    }, [])

    const fetchMoreData = async () => {
        const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c1bcac03d46c4ab7af774be570acd3a7&page=${page + 1}&pagesize=${props.pagesize}`;
        setPage(page + 1);
        setGlowing({ glowing: true });
        let data = await fetch(url);
        let parseData = await data.json()

        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
        setGlowing(true)
    };
    return (
        <>
            <div className="form-floating" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className="heading" themes={themes()}>{`News - Catchy ${props.heading}`}</h2>
            </div>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='container'>
                    <div className='row'>
                        {articles.map((element) => {
                            return <div className='col-md-4' key={element.url} >
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage ? element.urlToImage : "https://images.moneycontrol.com/static-mcnews/2021/12/stocks_sensex_nifty_stock-4-770x433.jpg"}
                                    newsUrl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
News.defaultProps = {
    country: 'in',
    pagesize: 10,
    category: 'general',
    heading: 'Headline'
}
News.propTypes = {
    country: propTypes.string,
    pagesize: propTypes.number,
    category: propTypes.string,
    heading: propTypes.string
}
export default News
