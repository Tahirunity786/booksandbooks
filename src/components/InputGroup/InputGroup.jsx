import styles from './input.module.css';

const InputGroup = ({ type = "text", desc = "", isDisabled = false, placeholder = '', id }) => (
  <div className={styles.inputGroup}>
    {desc && <span className={styles.inputGroupText}>{desc}</span>}
    <input 
      type={type} 
      className={styles.inputGroupInput} 
      disabled={isDisabled} 
      aria-label={desc || "Input field"}
      placeholder = {placeholder}
      id={id || 0}
    />
  </div>
);

export default InputGroup;
