import type { ComponentProps } from "react";

type TVariant = "primary" | "secondry" | "danger" | "warning" | "success"

type TButton = ComponentProps<"button"> & {
    variant?: TVariant
}

const Button = ({children,variant,style,className, ...rest}: TButton) => {
    return(
        <button {...rest} className={`${className} rounded px-2 py-1`} style={{...style,...checkVariant(variant)}}>{children}</button>
    )
}

export default Button;


function checkVariant(variant? : TVariant){
    switch (variant) {
        case "primary":
            return {backgroundColor: "#008bff" , color:"white"};
        case "secondry":
            return {backgroundColor: "gray" , color:"black"};
        case "danger":
            return {backgroundColor: "red" , color:"white"};
        case "warning":
            return {backgroundColor: "yellow" , color:"white"};
        case "success":
            return {backgroundColor: "green" , color:"white"};
    }
}