import { getHours, format } from "date-fns";
import { useEffect, useState } from "react";

type Time = {
  date: null | string;
  time: null | string;
  isNight: null | boolean;
  currentDate: null | Date;
};

const useTime = (): Time => {
  const [time, setTime] = useState<Time>({
    date: null,
    time: null,
    isNight: null,
    currentDate: null,
  });

  const calculate = () => {
    const currentDate = new Date();
    const date = format(currentDate, "eee, dd MMM yyyy");
    const time = format(currentDate, "hh:mm a");
    const isNight = getHours(currentDate) > 18;

    setTime({ date, time, isNight, currentDate });
  };

  useEffect(() => {
    calculate();
  }, []);

  return {
    ...time,
  };
};

export default useTime;
