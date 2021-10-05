import { useState, useEffect } from 'react';
import {
  FaBatteryEmpty,
  FaBatteryQuarter,
  FaBatteryHalf,
  FaBatteryThreeQuarters,
  FaBatteryFull
} from "react-icons/fa";

const Battery = () => {
  const [currentBattery, setCurrentBattery] = useState(<FaBatteryEmpty />);
  useEffect(() => {
    setInterval(() => {
      setTimeout(() => {
        setCurrentBattery(<FaBatteryQuarter />);
      }, 500);
      setTimeout(() => {
        setCurrentBattery(<FaBatteryHalf />);
      }, 1000);
      setTimeout(() => {
        setCurrentBattery(<FaBatteryThreeQuarters />);
      }, 1500);
      setTimeout(() => {
        setCurrentBattery(<FaBatteryFull />);
      }, 2000);

      return () => clearTimeout();
    }, 5000);
  }, []);

  return currentBattery;
}

export default Battery;