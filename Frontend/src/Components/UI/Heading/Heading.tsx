import styles from './heading.module.css';

export default function Heading({ title }: { title: string }) {
  return <h1 className={styles.title}>{title}</h1>;
}
