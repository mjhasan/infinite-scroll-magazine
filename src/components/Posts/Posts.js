import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

const Posts = (props) => {
    const id = props.data.id;
    const [news, setNews] = useState();
    useEffect(() => {
        fetch(`https://bd24report.com/wp-json/wp/v2/posts/${id}?_embed`)
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    const img = news?._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url
    const mainContent = {
        margin: '20px 0px 20px 0px',
        padding: ' 20px',
        backgroundColor: '#fff'
    }
    return (
        <Col style={mainContent} md={9}>
            <img src={img} alt="" width={700} height={410} />
            <br />
            <h5 style={{ fontWeight: '600', marginTop: '10px' }}>{news?.title.rendered}</h5>
            <small style={{ backgroundColor: '#D62027', color: '#FFFFFF', padding: '2px' }}> Published: {news?.date}</small>
            <br />
            <br />
            <div dangerouslySetInnerHTML={{ __html: news?.content.rendered }} style={{ textAlign: 'justify' }} />
        </Col>
    );
};

export default Posts;