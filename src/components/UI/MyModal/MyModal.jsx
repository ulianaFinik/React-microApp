import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {  //setVisible скрывает окно при нажатии на тёмную область
    
    const rootClasses = [cl.myModal]

    if (visible) {
        rootClasses.push(cl.active);
    }
    
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;