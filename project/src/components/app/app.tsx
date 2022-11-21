import Main from '../../pages/Main/Main';

type appProps = { title: string; date: string }

function App({ date, title }: appProps): JSX.Element {
  return (
    <div><Main date={date} title={title} /></div>
  );
}

export default App;
