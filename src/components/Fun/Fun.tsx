import { Link } from 'react-router';
import './Fun.scss';
import { funMetadata } from '../../data/funMetadata';

function Fun() {
  return (
    <div className="fun-container">
      <ul>
        {funMetadata.map((e) => (
          <li key={e.slug}>
            <Link className="fun-link" to={e.slug}>
              <h2>{e.title}</h2>
              <h3>{e.subtitle}</h3>
              <h4>{e.date.toDateString()}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fun;
