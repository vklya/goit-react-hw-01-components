import css from './stats.module.scss';
import PropTypes from 'prop-types';
import getRandomHexColor from './randonColor';

const Stats = ({ title, stats }) => {
    return (
        <section className={css.stats}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statsList}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li className={css.item} key={id} style={{backgroundColor: getRandomHexColor()}}>
                            <span className={css.label}>{label}</span>
                            <span className={css.percentage}>{percentage}%</span>
                        </li>
                    );
                }
            )}
            </ul>
        </section>
    );
};

Stats.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.string.isRequired,
    })).isRequired,
};

export default Stats;
