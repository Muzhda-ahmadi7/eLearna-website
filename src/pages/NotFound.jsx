import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="utility-page-wrap">
      <div className="utility-page-content">
        <div className="not-found-number">404</div>
        <h2 className="not-found-heading">Oops! Page not found</h2>
        <div className="margin-bottom-twenty-five">
          Oops! it could be you or us, there is no page here. It might have been moved or deleted.
        </div>
        <Link to="/" className="button button-yellow">
          <div>Back To Home</div>
        </Link>
      </div>
    </section>
  );
}
