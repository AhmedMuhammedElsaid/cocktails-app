import React, { FunctionComponent } from 'react';
import styles from './Loader.module.scss';
import { CircularProgress} from '@material-ui/core';

const Loader: FunctionComponent = () => {
  return (
    <div className={styles.Loader} data-testid="loader-spinner-testid">
      <CircularProgress color="inherit" />
    </div>
  );
};

export default Loader;
