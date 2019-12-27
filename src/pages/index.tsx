import React from 'react';
import Link from 'umi/link';

import styles from './index.css';

export default ()=> {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <Link to="/users"> go to /users</Link>
      
      <Link to="/index2"> index2</Link>
      <Link to="/helloword"> go to /HelloWord</Link>
    </div>
  );
}
