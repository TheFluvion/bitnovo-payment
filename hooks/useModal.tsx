import { useState } from "react";
import { Modal } from "react-native";

interface ModalProps {
    children: React.ReactNode;
}

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const CustomModal = ({ children }: ModalProps) =>
        <Modal
            visible={isOpen}
            animationType="fade"
            transparent
        >
            {children}
        </Modal>

    return { isOpen, handleOpen, handleClose, CustomModal };
}

export default useModal;
