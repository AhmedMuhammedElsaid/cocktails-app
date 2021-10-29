import React, { forwardRef, FunctionComponent } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import styles from "./CocktailModal.module.scss";
import { Fade } from "react-reveal";
import { CloseOutlined } from "@material-ui/icons";
interface Props {
  open: boolean;
  onClose: () => void;
}
const CocktailModal: FunctionComponent<Props> = forwardRef(
  ({ open, onClose, children }, ref) => {
    return (
      <Modal
        onClick={onClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.Modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade duration={1000} bottom>
          <div className={styles.Modal__Pepper}>
            <CloseOutlined
              onClick={onClose}
              fontSize="large"
              className={styles.Modal__ExistIcon}
            />
            {children}
          </div>
        </Fade>
      </Modal>
    );
  }
);
export default CocktailModal;
