import React from 'react';
import Slider from 'react-slick';
import {Link, useLocation} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import css from './Carousel.module.scss';

export default function Carousel({movies, info}) {
    const location = useLocation();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className={css.carousel}>
            <Slider {...settings}>
                {movies.map(({original_title, id, poster_path, release_date, genre_ids, vote_average}) => (
                    <div className={css.slide}>
                        <Link to={`/movies/${id}`} state={{from: location}} className={css.link}>
                            <img
                                src={
                                    poster_path
                                        ? `https://image.tmdb.org/t/p/w200/${poster_path}`
                                        : `https://i.ibb.co/GPMFHG6/keep-calm-poster-not-found-1.png`
                                }
                                alt={original_title}
                                className={css.img}
                                width={200}
                                height={300}
                            />
                            <div className={css.info}>
                                {info === "upcoming" && <p>
                                    <h2>{original_title}</h2>
                                    {release_date}
                                </p>}
                                {info === "catalog" && (

                                    <p>
                                        {genre_ids.join(', ')} | {release_date.substring(0, 4)}
                                    </p>
                                )}
                                {info !== "upcoming" && (


                                    <span className={css.rate}>
                                {vote_average.toFixed(1)}
                            </span>
                                )}
                            </div>
                        </Link>
                    </div>

                ))}
            </Slider>
        </div>
    );
}
