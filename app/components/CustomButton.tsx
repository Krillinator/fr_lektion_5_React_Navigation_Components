import styles from "./CustomButton.module.css"

interface CustomButton {
  customButtonName: string
  /* ex: () => void  */
}

// classname === class
// id === id (remains the same)
// TODO - why classes over ID's?
export function CustomButton(props: CustomButton) {
  return (
    <div>
      <button className={styles.btn}>{props.customButtonName}</button>
    </div>
  )
}
