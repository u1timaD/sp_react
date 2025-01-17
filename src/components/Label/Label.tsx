import styles from './Label.module.css';
import { LabelType } from './Label.types';

const Label = ({ children }: LabelType) => {
  return <label className={styles.label}>{children}</label>;
};

export default Label;
