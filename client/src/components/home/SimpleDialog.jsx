import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { DialogContent } from "@mui/material";
import { useState } from "react";

const SimpleDialog = (props) => {
  const { onClose, open } = props;
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>MariHacks Project</DialogTitle>
      <DialogContent>
        Introducing Overflow, the perfect way for people who want to keep track
        of their caffeine intake. Monitor your daily caffeine consumption and
        make sure you stay within your recommended daily limits. Simply enter
        your favorite drinks, from coffee to energy drinks to Preworkouts, and
        the site will automatically calculate your caffeine intake. Enjoy the
        benefits of caffeine without overdoing it!
      </DialogContent>
    </Dialog>
  );
};

export default SimpleDialog;
