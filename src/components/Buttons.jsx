import { Button } from "@nextui-org/react";
import "../styles/boton.css";

export function ButtonPedirAhora() {
    return (
        
        <Button
            style={{ backgroundColor: "#77B255", fontSize: "1.5rem", padding: "30px", borderRadius: 0, fontWeight: "bold" }}
            className="text-white shadow-md transition-all duration-300"
        >
            👉¡LO QUIERO!
        </Button>
    );
}
