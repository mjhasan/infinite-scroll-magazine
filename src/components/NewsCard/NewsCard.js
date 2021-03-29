import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NewsCard.css'

const NewsCard = (props) => {
    const news = props.news
    const img = news._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url
    const id = news.id
    return (
        <Col md={4}>
            <img src={img} height={210} width={320} alt="" />
            <h5><Link to={'/news/' + id}>{news.title.rendered}</Link></h5>
        </Col>
    );
};

export default NewsCard;