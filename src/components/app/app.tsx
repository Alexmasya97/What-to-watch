import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Fragment } from 'react';
import Main from '../main/main';
import { AppRoute } from '../../const';
import SignIn from '../../pages/Sign-in/Sign-in';
import MyList from '../../pages/My-list/My-list';
import MoviePage from '../../pages/Movie-page/Movie-page';
import AdReview from '../../pages/Ad-review/Ad-review';
import Player from '../../pages/Player/Player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../const';


type AppProps = {
  name: string;
  genre: string;
  year: number;
}

function App({ name, genre, year }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main name={name} genre={genre} year={year} />}
        />

        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />

        <Route
          path={AppRoute.Film}
          element={<MoviePage />}
        />

        <Route
          path={AppRoute.Player}
          element={<Player />}
        />

        <Route path="*" element={
          <Fragment>

            <NotFound />
            <Link to="/">Go to the main page</Link>
          </Fragment>

        }
        />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <AdReview />
            </PrivateRoute>
          }
        />


      </Routes>


    </BrowserRouter>
  );
}

export default App;
