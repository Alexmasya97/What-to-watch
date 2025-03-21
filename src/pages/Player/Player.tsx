import {useParams} from 'react-router-dom';
import { Films } from '../../types/film';

type PlayerProps = {
  films: Films;
}

function Player({ films }: PlayerProps): JSX.Element {

  const { id } = useParams<{ id: string }>(); // Берем параметр id из URL
  const film = films.find((f) => f.id === Number(id)); // Находим фильм по id

  return (
    <div className="player">
      <video src={film?.video_link} className="player__video" poster={film?.poster_image}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use href="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use href="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
