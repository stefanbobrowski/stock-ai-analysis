import Example from '../../components/Example/Example';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <main className={styles.home}>
      <h2 className={styles.title}>Home</h2>
      <p>Welcome to Stock AI Analysis!</p>
      <Example />
    </main>
  );
};

export default Home;
