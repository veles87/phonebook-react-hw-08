import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

export default function LoaderComponent() {
  return (
    <div className={styles.container}>
      <Loader
        className={styles.loader}
        type="Watch"
        color="#0b0"
        height={85}
        width={85}
        timeout={4000}
      />
    </div>
  );
}
