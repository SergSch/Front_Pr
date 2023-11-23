import style from './SimpleInput.module.css';

export default function SimpleInput({ disabled, isError, size }) {
  return (
    <input
      type="text"
      placeholder="Default placeholder"
      className={`${style.input} ${isError ? style.errorInput : ''} 
      ${size ? style[size] : ''}`}
      disabled={disabled}
    />
  );
}
