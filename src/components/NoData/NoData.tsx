import React, { FunctionComponent } from "react";
import styles from "./NoData.module.scss";

const NoData: FunctionComponent = () => {
  return (
    <div className={styles.NoData} data-testid="no-data-testid">
      No Data Found
    </div>
  );
};

export default NoData;
