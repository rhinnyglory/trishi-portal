import { createContext, useState } from "react";
import { APIMsgType } from "../../constant/constant";

interface StoreContextInterface {
    msg: string,
    isDisplayed: boolean,
    displayMsg: any,
    onClose: any,
    msgType: any
}

const StoreContext = createContext<StoreContextInterface | undefined>(undefined);

let timer: any;

export const StoreConttextProvider = (props: any) => {
    const [msg, setMsg] = useState("");
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [msgType, setMsgType] = useState(APIMsgType.Normal);

    const displayHandler = (msg: any, msgType?: any) => {
        setMsg(msg);
        setIsDisplayed(true);
        if (msgType)
            setMsgType(msgType)
        timer = setTimeout(() => {
            closeHandler();
        }, 3000)
    }

    const closeHandler = () => {
        clearTimeout(timer);
        setIsDisplayed(false);
    }

    return (
        <StoreContext.Provider
            value={{
                msg,
                isDisplayed,
                displayMsg: displayHandler,
                onClose: closeHandler,
                msgType
            }}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContext;