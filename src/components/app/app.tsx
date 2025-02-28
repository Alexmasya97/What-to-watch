import Main from '../main/main';

type AppProps = {
  name: string;
  genre: string;
  year: number;
}

function App({ name, genre, year }: AppProps): JSX.Element {
  return (
    <Main
      name={name}
      genre={genre}
      year={year}
    />);
}

export default App;
