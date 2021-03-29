import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import InfiniteScroll from 'react-infinite-scroll-component';
import Posts from '../Posts/Posts';

const Singe = () => {
    const { id } = useParams();
    const [newsList, setNewsList] = useState();
    const [count, setCount] = useState(1);

    const newData = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    useEffect(() => {
        fetch(`https://bd24report.com/wp-json/wp/v2/posts/`)
            .then(res => res.json())
            .then(data => {
                const mainNews = data.find(el => el.id == id)
                const othersNews = data.filter(el => el.id != id)
                const allNews = [mainNews, ...othersNews]
                const dataShorter = allNews?.slice(0, count)
                setNewsList(dataShorter)
            })
    }, [count])

    const spinnerStyle = {
        position: "fixed",
        top: "50%",
        left: "50%",
    }
    return (
        <div style={{ backgroundColor: '#F0F0ED' }}>
            <Container>
                <Row>
                    <InfiniteScroll
                        dataLength={newsList?.length || 0}
                        next={newData}
                        hasMore={true}
                        loader={newsList? '' : <Spinner style={spinnerStyle} animation="grow" />}
                    >
                        {newsList && newsList.map((data, key) => <Posts key={key} data={data} />)}
                    </InfiniteScroll>

                    <Col style={{
                        position: 'fixed',
                        right: '0',
                    }} md={3}>
                        <h5>Sidebar</h5>
                    </Col>
                </Row>


            </Container>
        </div >
    );
};

export default Singe;