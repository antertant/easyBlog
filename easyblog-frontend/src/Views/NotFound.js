import {useEffect} from "react";

export default function NotFound() {

    useEffect(() => {
        document.title = "404 - Page Not Found";
    });

    return (
        <div>
            404 - Page not Found.
        </div>
    )
}