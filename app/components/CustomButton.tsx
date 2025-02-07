import styles from "./CustomButton.module.css"

// classname === class
// id === id (remains the same)
// TODO - why classes over ID's?
export function CustomButton() {
  return (
    <div>
      <button className={styles.btn}>Navigate</button>
    </div>
  )
}
