import {useState} from 'react';
import {Films} from '../../types/film';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';

type MyListProps = {
  films: Films;
}

function MyList({films}: MyListProps): JSX.Element {
  const [, setFilm] = useState(0);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link" href="/">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {films.map((film) =>
            (
              <article
                onMouseOver={() => {
                  setFilm(film.id);
                }}
                className="small-film-card catalog__films-card"
                key={film.id}
              >
                <div className="small-film-card__image">
                  <img src={film.preview_image} alt={film.name} width="280" height="175" />
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href="film-page.html">{film.name}</a>
                </h3>
              </article>
            ),
          )}
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default MyList;
