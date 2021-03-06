import PropTypes from "prop-types";

import '../styles/components/MovieSceneDetail.scss';

function MovieSceneDetail (props) {
    return (
        <section className="sceneDetail">
            <div className="sceneDetail__card">
                <div className="sceneDetail__wrap">
                    <div className="sceneDetail__wrapImage">
                        <img
                            className="sceneDetail__image"
                            alt={props.movie.title}
                            src={props.movie.poster}
                        />
                    </div>
                    <div className="sceneDetail__wrapContent">
                        <h4 className="sceneDetail__title">{props.movie.title}</h4>
                        <p className='sceneDetail__year'>{props.movie.year}</p>
                        <p className='sceneDetail__director'>{props.movie.director}</p>

                        <p className='sceneDetail__quote'>{props.movie.full_line}</p>

                        <p className="sceneDetail__audio"><a href={props.movie.audio} className="sceneDetail__audioLink" target="_blank" rel="noreferrer">Escucha el audio</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// PropTypes, que define los tipos de los valores de los props
MovieSceneDetail.propTypes = {
    movie: PropTypes.object
};

export default MovieSceneDetail;