import './App.css';

function App() {
  return (
    <main className="landing-page">
      <nav className="top-bar" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="First web app home">
          <span className="wordmark-icon" aria-hidden="true">&lt;/&gt;</span>
          <span>MY FIRST WEB APP</span>
        </a>
        <a
          className="nav-link"
          href="https://github.com/mihaasmi/AI-Software-test"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            A small project, a big first step
          </p>
          <h1>
            This is my
            <br />
            <span>first web app.</span>
          </h1>
          <p className="intro">
            I made this little corner of the internet while learning how to
            build for the web. Thanks for stopping by.
          </p>
          <a
            className="github-button"
            href="https://github.com/mihaasmi/AI-Software-test"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="github-icon"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.64-1.24-1.64-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.5 2.22 3.24 1.57.1-.74.39-1.24.7-1.53-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.28-2.6 5.22-5.08 5.5.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
            <span>Explore the project</span>
            <span className="button-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="decorative-orbit orbit-one" aria-hidden="true" />
        <div className="decorative-orbit orbit-two" aria-hidden="true" />
        <div className="hero-sparkle sparkle-one" aria-hidden="true">✳</div>
        <div className="hero-sparkle sparkle-two" aria-hidden="true">✦</div>
      </section>

      <footer className="footer">
        <span>Made with curiosity.</span>
        <span>One line of code at a time <span aria-hidden="true">↗</span></span>
      </footer>
    </main>
  );
}

export default App;
