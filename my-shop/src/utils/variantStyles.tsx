export type TVariant = "primary" | "secondry" | "danger" | "warning" | "success"


export function checkVariant(variant? : TVariant){
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