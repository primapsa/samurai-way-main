import React from "react";
import styles from '../../onoff.module.css'

type OnOffType = {
    mode: boolean;
    callback: () => void;
}
export const OnOffBody: React.FC<OnOffType>  = ({mode, callback}) => {
    const onClickHandler = () => callback();
    const colorStatusOn = mode ? styles.on : ''
    const colorStatusOff = mode ? '' : styles.off
    const colorStatus = mode ? styles.on : styles.off
    return (
        <div className={styles.wrapper}>
            <div className={styles.button +' ' + colorStatusOn} onClick={onClickHandler}>ON</div>
            <div className={styles.button + ' ' +colorStatusOff } onClick={onClickHandler}>OFF</div>
            <div className={styles.indicator + ' ' + colorStatus}></div>
        </div>
    )
}
