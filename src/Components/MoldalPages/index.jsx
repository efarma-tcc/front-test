import styles from './index.module.css'

export default function ModalPages({ children }) {
    return (
      <div className={styles.modals}>
        {children}
      </div>
    );
  }