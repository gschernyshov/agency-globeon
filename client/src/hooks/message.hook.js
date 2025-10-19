import { useCallback } from "react";

export const useMessage = () => {
    return useCallback((feedbackMessage, text) => {
        if (text) {
            feedbackMessage.current.classList.add("feedback-message-active");
            feedbackMessage.current.textContent = text;
        }
    }, []);
}