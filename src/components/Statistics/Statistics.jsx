import PropTypes from 'prop-types';
import css from './Statistics.module.css';


export const Statistics = ({ data, title }) => {
  return (
    <section>
      <div className={css.statistics}>
        {title && <h2 className="title">{title}</h2>}

        <ul className={css.stat}>
          {data.map(({ id, label, percentage }) => (
            <li key={id} className={css.item}>
              <span className="label">{label}  </span>
              <span className="percentage">{percentage} %</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
