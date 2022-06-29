import { useLocation } from "react-router-dom";

const useLocationId = () => {
    const location = useLocation();
    const getId = () => {
        let pathArray = (location.pathname).split("/");
        return pathArray[pathArray.length - 1];
    };
    return getId();
};

export { useLocationId };