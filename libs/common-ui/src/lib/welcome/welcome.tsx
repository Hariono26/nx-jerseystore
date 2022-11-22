import styles from './welcome.module.css';

/* eslint-disable-next-line */
export interface WelcomeProps {
  name: string,
  containerSetup: string
}

export function Welcome(props: WelcomeProps) {
  return (
    <div className={styles[`${props.containerSetup}`]}>
      <h1>Welcome to {props.name}</h1>
    </div>
  );
}

export default Welcome;
