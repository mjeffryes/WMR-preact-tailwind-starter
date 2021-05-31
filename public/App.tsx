import { LocationProvider, Router, Route, lazy, ErrorBoundary } from "preact-iso";
import Home from "./pages/home/index";
import NotFound from "./pages/_404";
import Header from "./header";

const About = lazy(() => import("./pages/about/index.js"));

function App(): JSX.Element {
  return (
    <LocationProvider>
      <div class="app">
        <Header />
        <ErrorBoundary>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route default component={NotFound} />
          </Router>
        </ErrorBoundary>
      </div>
    </LocationProvider>
  );
}

export default App;
