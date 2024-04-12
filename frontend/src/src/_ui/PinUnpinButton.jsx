import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaThumbtack, FaRegThumbtack } from 'react-icons/fa';

const PinUnpinButton = ({ initiallyPinned = false, onToggle }) => {
  const [isPinned, setIsPinned] = useState(initiallyPinned);

  const togglePin = () => {
    try {
      const newState = !isPinned;
      setIsPinned(newState);
      if (onToggle) {
        onToggle(newState);
      }
      console.log(`PinUnpinButton: newState is ${newState ? 'pinned' : 'unpinned'}.`);
    } catch (error) {
      console.error('Error toggling pin state in PinUnpinButton:', error.message);
      throw error; // Re-throwing error after logging it for further handling upstream if necessary.
    }
  };

  return (
    <Button variant="outline-primary" onClick={togglePin} aria-label={isPinned ? 'Unpin' : 'Pin'}>
      {isPinned ? <FaThumbtack /> : <FaRegThumbtack />}
    </Button>
  );
};

export default PinUnpinButton;