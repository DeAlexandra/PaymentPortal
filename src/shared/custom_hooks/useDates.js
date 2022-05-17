import { useState } from "react";

const useDates = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const handleChangeStart = (date) => {
        setStartDate(date);
    };
    const handleChangeEnd = (date) => {
        setEndDate(date);
    };
    return { startDate, endDate, handleChangeStart, handleChangeEnd };
};

export default useDates;