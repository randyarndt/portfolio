import {
  DialogRoot,
  DialogBody,
  DialogContent,
  DialogHeader,
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
    <DialogRoot
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
        <DialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}>
          <DialogHeader fontSize="lg" fontWeight="bold">
            {isSuccess ? 'All good!' : 'Oops!'}
          </DialogHeader>
          <DialogBody>{message}</DialogBody>
        </DialogContent>
    </DialogRoot>
  );
}

export default Alert;
