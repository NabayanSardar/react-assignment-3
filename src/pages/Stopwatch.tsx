import { useRef, useState } from "react";
import type { Time } from "../types/interface/stopwatch.interface";

const Stopwatch = () => {
  const [time, setTime] = useState<Time>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isRunning, setIsRunning] = useState<boolean>(false);

  const intervalRef = useRef<number | null>(null);

  const formatTime = (value: number) =>
    value.toString().padStart(2, "0");

  const toggleStartPause = () => {
    if (isRunning) {

      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsRunning(false);
    } else {

      intervalRef.current = window.setInterval(() => {
        setTime((prev) => {
          let { hours, minutes, seconds } = prev;

          seconds++;

          if (seconds === 60) {
            seconds = 0;
            minutes++;
          }

          if (minutes === 60) {
            minutes = 0;
            hours++;
          }

          return { hours, minutes, seconds };
        });
      }, 1000);

      setIsRunning(true);
    }
  };

  const reset = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white p-8 rounded-xl shadow-lg w-80">
      <h1 className="text-2xl font-bold mb-4">Stopwatch</h1>

      <div className="text-4xl font-mono mb-6">
        {formatTime(time.hours)}:
        {formatTime(time.minutes)}:
        {formatTime(time.seconds)}
      </div>

      <div className="flex gap-4">
        <button
          onClick={toggleStartPause}
          className={`px-4 py-2 rounded ${
            isRunning
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isRunning ? "Pause" : "Start"}
        </button>

        <button
          onClick={reset}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>

  </div>
);
};

export default Stopwatch;






