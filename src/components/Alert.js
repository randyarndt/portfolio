import {
  DialogRoot,
  DialogBody,
  DialogContent,
  DialogHeader,
  Box
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success"

  return (
    <Box
      position="fixed"
      top={73}
      left={0}
      right={10}
      backgroundColor="#512DA8"
    >
    <DialogRoot
      lazyMount
      closeOnEscape
      closeOnInteractOutside
      open={isOpen}
      placement="center"
      motionPreset="slide-in-bottom"
      initialFocusEl={cancelRef}
      onClose={onClose}
      onEscapeKeyDown={onClose}
      onInteractOutside={onClose}
      role="alertdialog"
    >
        <DialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}>
          <DialogHeader fontSize="lg" fontWeight="bold">
            {isSuccess ? 'All good!' : 'Oops!'}
          </DialogHeader>
          <DialogBody>{message}</DialogBody>
        </DialogContent>
    </DialogRoot>
    </Box>
  );
}

export default Alert;
