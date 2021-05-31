import styles from "./style.module.css";

const About = ({ query }) => (
  <section class={styles.about + " p-8"}>
    <h1>About</h1>
    <p>A page all about this website.</p>
    <pre>{JSON.stringify(query)}</pre>
  </section>
);

export default About;
