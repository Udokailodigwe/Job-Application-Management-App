import { useEffect } from "react";
import Jobs from "./Jobs";
import Wrapper from "../assets/wrappers/JobsContainer";
import { UseSelector, useDispatch, useSelector } from "react-redux";

const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);

  return <h2>JobsContainer</h2>;
};
export default JobsContainer;
