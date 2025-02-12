import { useEffect, useRef, useState } from "react";

const useWebSocket = (url: string) => {
    const socketRef = useRef<WebSocket | null>(null);
    const [messages, setMessages] = useState<string[]>([]);
    const [isConnected, setIsConnected] = useState(false);
    const [disconnected, setDisconnected] = useState(false);

    useEffect(() => {
        connectWebSocket();

        return () => {
            socketRef.current?.close();
        };
    }, [url]);

    const connectWebSocket = () => {
        socketRef.current = new WebSocket(url);

        socketRef.current.onopen = () => {
            setIsConnected(true);
            console.log("✅ WebSocket conectado");
        };

        socketRef.current.onmessage = (event) => {
            console.log("📩 Nuevo mensaje:", event.data);
            setMessages((prevMessages) => [...prevMessages, event.data]);
        };

        socketRef.current.onerror = (error) => {
            console.error("❌ WebSocket error:", error);
            setDisconnected(true);
        };

        socketRef.current.onclose = () => {
            setIsConnected(false);
            console.warn("⚠️ WebSocket cerrado, intentando reconectar...");
            setTimeout(connectWebSocket, 3000); // Reintento después de 3 segundos
        };
    };

    const sendMessage = (message: string) => {
        if (socketRef.current?.readyState === WebSocket.OPEN) {
            socketRef.current.send(message);
        } else {
            console.warn("⚠️ No se puede enviar mensaje, WebSocket desconectado");
        }
    };

    return { isConnected, messages, disconnected, sendMessage };
};

export default useWebSocket;
