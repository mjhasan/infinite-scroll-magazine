import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import NewsCard from '../NewsCard/NewsCard';

const Home = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('https://bd24report.com/wp-json/wp/v2/posts?_embed')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    const spinnerStyle = {
        position: "fixed",
        top: "50%",
        left: "50%",
    }
    return (
        <Container>
            <Row className="mt-5">
                {news.length === 0 ? <Spinner style={spinnerStyle} animation="grow" /> : news.slice(0, 9).map(data => <NewsCard key={data.id} news={data} />)}
            </Row>
        </Container>
    );
};

export default Home;