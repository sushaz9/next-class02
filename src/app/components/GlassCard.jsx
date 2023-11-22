import styles from "./GlassCard.module.css";

export default function GlassCard() {
  return (
    <div className={`${styles.glasscard} ${styles.glasseffect}`}>
      <p>
        <strong>Favourite hobby: </strong> Badminton
      </p>
      <p>
        <strong>Favourite book: </strong> Eight Bears - Gloria Dickey
      </p>
      <p>
        <strong>Favourite song: </strong> You Got It - Roy Orbison
      </p>
      <p>
        <strong>Football team: </strong> Liverpool Football Club
      </p>
    </div>
  );
}
