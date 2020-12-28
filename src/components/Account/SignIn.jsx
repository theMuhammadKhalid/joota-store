import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core/";

import { useSelector, useDispatch } from "react-redux";
import { changeOpenSignInDialog } from "../../states/actions.js";

export default function SignIn() {
  const { openSignInDialog } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Dialog
      open={openSignInDialog}
      onClose={() => dispatch(changeOpenSignInDialog())}
      maxWidth="xs"
    >
      <DialogTitle>Sign In</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          label="Email"
          margin="none"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Password"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember me"
        />
      </DialogContent>

      <DialogActions>
        <Button variant="contained" color="primary">
          Sign In
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(changeOpenSignInDialog())}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
