import type { ComponentProps } from "react";
import { checkVariant } from "../../utils/variantStyles";
import type { TVariant } from "../../utils/variantStyles";


type TButton = ComponentProps<"button"> & {
    variant?: TVariant
}

const Button = ({children,variant,style,className, ...rest}: TButton) => {
    return(
        <button {...rest} className={`${className} rounded px-2 py-1`} style={{...style,...checkVariant(variant)}}>{children}</button>
    )
}

export default Button;


