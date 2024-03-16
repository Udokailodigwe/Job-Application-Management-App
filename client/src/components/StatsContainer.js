import StatItem from "./StatItem";
import Wrapper from "../assets/wrappers/StatsContainer";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import { UseSelector, useSelector } from "react-redux";

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.alljobs);

  const defaultStats = [{}];

  return <h2>StatsContainer</h2>;
};

export default StatsContainer;
