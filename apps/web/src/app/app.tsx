import styles from './app.module.scss';

import { Button } from '@workspace-7095/components';

export function App() {
  return (
    <>
      <button className="button">button1</button>
      <button className={styles.button}>button2</button>
      <Button>button3</Button>
    </>
  );
}

export default App;
