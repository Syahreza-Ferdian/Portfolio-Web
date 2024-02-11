import { useEffect } from "react";

function EventHanding() {
    useEffect(() => {
        function handleFocus() {
            document.title = 'My Portfolio';
        }

        function handleBlur() {
            document.title = 'Come back :(';
        }

        window.addEventListener('focus', handleFocus);
        window.addEventListener('blur', handleBlur);

    });

    return null;
}

export default EventHanding;