import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Fragment } from 'react';
import Main from '../main/main';
import { AppRoute } from '../../const';
import SignIn from '../../pages/Sign-in/Sign-in';
import MyList from '../../pages/My-list/My-list';
import MoviePage from '../../pages/Movie-page/Movie-page';
import AddReview from '../../pages/Ad-review/Ad-review';
import Player from '../../pages/Player/Player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../const';
import { Films } from '../../types/film';

type AppProps = {
  films: Films;
}

function App({ films }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main films={films} />} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.MoviePage} element={<MoviePage films={films} />} />
        <Route path={AppRoute.Player} element={<Player films={films} />} />
        <Route path="*" element={
          <Fragment>
            <NotFound />
            <Link to="/">Go to the main page</Link>
          </Fragment>
        }
        />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth} >
            <MyList films={films} />
          </PrivateRoute>
        }
        />

        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <AddReview films={films} />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
