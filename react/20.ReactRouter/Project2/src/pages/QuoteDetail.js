import { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comment from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId]);

  console.log(match.path);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="focused">{error.message}</div>;
  }
  if (!loadedQuote.text) {
    return <div className="centered focused">No Quotes</div>;
  }

  return (
    <section>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link to={`${match.url}/comment`} className="btn--flat">
            Show comment
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comment`}>
        <Comment />
      </Route>
    </section>
  );
};

export default QuoteDetail;
