import React from "react";


const Container = ( {color, children}) => {
    return (
        <div className={`tui-window ${color}-168 black-255-text`}>

            <fieldset className="tui-fieldset tui-border-solid white-border">
                {children}
            </fieldset>
        </div>
    );
}

export default Container;