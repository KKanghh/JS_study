import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comment from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUOTES = [
  { id: "q1", author: "MAX", text: "Hello, world!" },
  { id: "q2", author: "KANG", text: "YES" },
];

const QuoteDetail = () => {
  const params = useParams();
  console.log(params.quoteId);
  const quote = DUMMY_QUOTES.find((e) => e.id === params.quoteId);
  const match = useRouteMatch();

  console.log(match.path);
  if (!quote) {
    return <NoQuotesFound />;
  }
  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
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
