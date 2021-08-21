import React, { useState, useContext } from "react";

const AppContext = React.createContext();

function AppDataLayer({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [cardModal, setCardModal] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeCardModal = () => {
    setCardModal(false);
  };

  const openCardModal = () => {
    setCardModal(true);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeThisModal = () => {
    setModal(false);
  };

  const openThisModal = () => {
    setModal(true);
  };

  const closeModalToggle = () => {
    if (modal) {
      setIsModalOpen(false);
    } else if (isModalOpen) {
      setModal(false);
    }
  };
  return (
    <AppContext.Provider
      value={{
        closeThisModal,
        openThisModal,
        closeModal,
        openModal,
        closeModalToggle,
        closeCardModal,
        openCardModal,
        cardModal,
        isModalOpen,
        modal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppDataLayer };
