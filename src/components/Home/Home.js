import React from 'react';
import "./Home.css"
import { useQuery } from 'react-query';
import Spinner from '../Spinner';
import Content from './Content';

const Home = () => {

    const { data, isLoading, refetch } = useQuery('sunilJiData', () => fetch('https://obscure-island-00998.herokuapp.com/content').then(res => res.json()));

    if (isLoading) {
        return <Spinner />
    }

    return (
        <section className='card__container'>
            <div className='fb__card'>
                {
                    data.map(content => <Content key={content._id} content={content} refetch={refetch} />)
                }
            </div>
        </section>
    );
};

export default Home;