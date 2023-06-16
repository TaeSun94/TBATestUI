import Wallet from '../../components/Wallet';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <div className={styles.tabContainer}>
            <button className={styles.tab}>Mint</button>
            <span className={styles.divider} />
            <button className={styles.tab}>transfer</button>
            <span className={styles.divider} />
            <button className={styles.tab}>inventory</button>
          </div>
          <Wallet />
        </div>
        <div className={styles.contentsWrapper}>

        </div>
      </div>
    </div>
  )
};

export default Home;
