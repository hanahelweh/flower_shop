import React, { cloneElement, createContext, ReactElement, useContext, useState } from 'react'
import { createPortal } from 'react-dom';
import styles from './Modal.module.css'
import { HiOutlineArrowSmallUp } from 'react-icons/hi2';
import { IoMdClose } from "react-icons/io";
type ModalContextType ={
  openName:string | undefined,
  setOpenName: (name: string) => void;
  close:()=>void
}

type ModalProps = {
  children: React.ReactNode;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);
export default function Modal({children}:ModalProps) {
  const [openName,setOpenName] = useState('');
  const close = () => setOpenName('');
  return (
    <ModalContext.Provider value={{openName,setOpenName,close}}>
      {children}
    </ModalContext.Provider>
  )
}


type CompoundProps = {
  children: ReactElement,
  windowName:string
}
function Open({children,windowName}:CompoundProps){
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Open must be used within a ModalContext.Provider');
  }
  const {setOpenName} = context;
  return cloneElement(children,{onClick:()=>setOpenName(windowName)})
}

function Window({children,windowName}:CompoundProps){
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Window must be used within a ModalContext.Provider');
  }

  const { openName, close } = context;
  if(windowName!==openName) return null;
  return createPortal(
    <div className={styles.modal}>
      <div className={styles.window}>
        <div onClick={close} className={`${styles.closeBtn} btn sm dark`}>
          <div>
              <IoMdClose />
          </div>
        </div>
        {cloneElement(children,{onClose:close})}
      </div>
    </div>
    ,document.body
  )
}

Modal.Open=Open;
Modal.Window=Window;