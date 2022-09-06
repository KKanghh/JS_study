import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "MAX", text: "Hello, world!" },
  { id: "q2", author: "KANG", text: "YES" },
];

const AllQuote = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuote;
