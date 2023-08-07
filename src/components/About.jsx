
import React from 'react';
import styles from '../styles/about.module.css'; 

export default function About({ onNavigateBack }) {
  return (
    <div className={styles.about}>
      <h2>About Me</h2>
      <p>Hi I'm Leman. I'm 19 and studying B.S. in Information Technologies in UNEC. This is basic information about me.</p>
      <button className={styles.goBackButton} onClick={onNavigateBack}>Go Back</button>
    </div>
  );
}
