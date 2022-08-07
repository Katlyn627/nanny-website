import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export default function QuoteSection() {
  return (
    <div className="section quote">
      <p className="quote-text">
        <FontAwesomeIcon icon={faQuoteLeft} />
        If kids come to us from strong, healthy, functioning families, it makes
        our job easier. If they do not come to us from strong, healthy,
        functioning families, it makes our job more important.
        <FontAwesomeIcon icon={faQuoteRight} />
      </p>
      <p className="quote-author"> - Barbara Colorose</p>
    </div>
  );
}
