import React from "react";
import styles from "./SignUp.module.css";

import { useSelector, useDispatch } from "react-redux";
import { changeOpenSignUpDialog } from "../../states/actions.js";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  FormControlLabel,
  Checkbox,
  DialogActions,
  Button,
} from "@material-ui/core/";

export default function SignUp() {
  const { openSignUpDialog } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Dialog
      open={openSignUpDialog}
      onClose={() => dispatch(changeOpenSignUpDialog())}
    >
      <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
        <div className={styles.fullName}>
          <TextField
            required
            autoFocus
            label="First Name"
            variant="outlined"
            fullWidth
          />
          <TextField label="Last Name" variant="outlined" fullWidth />
        </div>
        <TextField
          required
          label="User Name"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          required
          label="Email"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          required
          label="Password"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="I want to receive updates via email."
        />
      </DialogContent>

      <DialogActions>
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(changeOpenSignUpDialog())}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
