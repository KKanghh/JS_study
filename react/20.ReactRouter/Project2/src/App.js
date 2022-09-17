import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import AllQuote from "./pages/AllQuote";
// import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
function App() {
  return (
    <div>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes" />
            </Route>
            <Route path="/add">
              <NewQuote />
            </Route>
            <Route path="/quotes" exact>
              <AllQuote />
              {/* <QuoteList quotes={DUMMY_QUOTES} /> */}
            </Route>
            <Route path="/quotes/:quoteId">
              <QuoteDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
