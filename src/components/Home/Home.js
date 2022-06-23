import React from 'react';
import "./Home.css"
import { useQuery } from 'react-query';
import Spinner from '../Spinner';
import Content from './Content';

const Home = () => {

    const { data, isLoading, refetch } = useQuery('sunilJiData', () => fetch('http://localhost:5000/content').then(res => res.json()));

    if (isLoading) {
        return <Spinner />
    }

    return (
        <section className='fb__card'>
            {
                data.map(content => <Content key={content._id} content={content} refetch={refetch}/>)
            }
        </section>
    );
};

export default Home;