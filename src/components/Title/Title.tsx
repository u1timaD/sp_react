import './Title.css';
import { ValueType } from './Title.types';

export const Title = ({ value }: ValueType) => {
  return <h2 className="title">{ value }</h2>;
};
