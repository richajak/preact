import { render } from 'preact';

export function App(props) {
  return (
    <>
      <p>Hello Vite + Preact!</p>
      <p><a href="https://preactjs.com/" target="_blank" rel="noopener noreferrer">Learn Preact</a></p>
    </>
  )
}

render(<App />, document.getElementById('app'));