"use client";

import { useContext } from "react";
import Modal from "react-modal";
import { SiteContext } from "@/context/siteContext";
import OrderForm from "@/components/OrderForm/OrderForm";
import "./Modal.css";

// this modal is in the Layout now :)

const ModalR = () => {
    const { isModalOpen, closeModal, comment } = useContext(SiteContext);

    return (
        <Modal
            isOpen={isModalOpen}
            overlayClassName={"backdrop"}
            className={"modalContent"}
            closeTimeoutMS={700}
            onRequestClose={closeModal}
            ariaHideApp={false}
        >
            {/* here must be imported children  like this < Child/>*/}
            <OrderForm comment={comment} />
            {/* {children} */}
        </Modal>
    );
};

export default ModalR;
