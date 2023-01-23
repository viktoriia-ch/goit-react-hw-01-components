import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const transaction = items.map(({ id, type, amount, currency }) => (
    <tr key={id} className={styles.item}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));

  return (
    <>
      <table className={styles.history}>
        <thead className={styles.title}>
          <tr>
            <th className={styles.label}>Type</th>
            <th className={styles.label}>Amount</th>
            <th className={styles.label}>Currency</th>
          </tr>
        </thead>

        <tbody className={styles.list}>{transaction}</tbody>
      </table>
    </>
  );
};

export default TransactionHistory;

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
