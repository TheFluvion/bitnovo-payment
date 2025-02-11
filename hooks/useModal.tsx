import { useEffect, useState } from "react";
import { Modal } from "react-native";

interface ModalProps {
    children: React.ReactNode;
}

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };

    return { isOpen, handleOpen, handleClose };
}

export default useModal;
