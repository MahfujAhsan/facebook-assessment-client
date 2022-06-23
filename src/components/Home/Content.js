import React from 'react';
import "./Content.css";
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaGlobeAmericas, FaUserCircle } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { AiOutlineLike } from 'react-icons/ai';
import { BiMessage } from 'react-icons/bi';
import { TiArrowForwardOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';

// inline styling for showing capability
const Content = ({ content, refetch }) => {
    const { quotes, director, avatarImage, coverImg, name, img, status } = content;
    refetch();
    return (
        <div className='card__content'>
            <div className='card__header'>
                <div className='left'>
                    <div>
                        <img width={50} src={img} alt="Give-India-Logo" />
                    </div>
                    <div className='head__paragraph'>
                        <p>{name} <BsCheckCircleFill className='check__icon' /></p>
                        <p>{status} · <FaGlobeAmericas /></p>
                    </div>
                </div>
                <div>
                    <HiOutlineDotsHorizontal className='horizontal__dots' />
                </div>
            </div>
            <div className='quotes_area'>
                <p>{quotes} - <span>{director}</span></p>
            </div>
            <div className='images__area'>
                <img style={{ width: '100%' }} src={coverImg} alt="" />
                <div className='image__quote'>
                    <img width={150} height={150} style={{ borderRadius: "50%", border: '10px solid #fff', marginTop: "-30px", marginLeft: '10px' }} src={avatarImage} alt="" />
                    <p style={{ display: 'flex', flexDirection: 'column' }}>{quotes} <span style={{ color: '#DD5E50', fontWeight: '700' }}> - {director}</span></p>
                </div>
            </div>
            <div to="#" style={{ backgroundColor: "#F0F2F5", padding: '10px 35px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', boxShadow: '0px 5px 8px -9px rgba(0, 0, 0, 1)' }}>
                <div>
                    <a style={{ textDecoration: 'none', color: 'gray', fontSize: '12px' }} href='http://www.giveindia.com/'>GIVEINDIA.ORG</a>
                    <p style={{ fontWeight: 'bold', margin: '0', paddingBottom: '3px' }}>Help 34 abandoned children</p>
                    <p style={{ color: 'gray', fontSize: '12px', margin: '0' }}>Not Affiliate with Facebook</p>
                </div>
                <div>
                    <button style={{ backgroundColor: "#A9A9A9", border: 'none', borderRadius: '7px', padding: '10px 15px', fontWeight: 'bold', cursor: 'pointer' }}>Donate Now</button>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 35px', }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                        <AiFillLike style={{ color: '#2e81f4' }} />
                        <FcLike />
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <Link style={{ textDecoration: 'none', color: 'gray', fontSize: '12px' }} to="#">3.2K</Link>
                    </div>
                </div>
                <div className='comments__share'>
                    <Link to="#">33 Comments</Link>
                    <Link to="#">101 Shares</Link>
                </div>
            </div>
            <div className='card__footer'>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <AiOutlineLike size={25} /> <span>Like</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <BiMessage size={25} /> <span>Comment</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                <TiArrowForwardOutline size={25} /><span>Share</span>
                </div>
                <FaUserCircle style={{cursor: 'pointer'}} />
            </div>
        </div>
    );
};

export default Content;