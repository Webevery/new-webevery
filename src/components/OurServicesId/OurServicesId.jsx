//"use client";

import styles from "./OurServicesId.module.scss";
import { GetOurServicesById } from "@/fetch/ClientFetsh";

const OurServicesId = ({ params }) => {
  const { id } = params;
  const { data, error, isLoading } = GetOurServicesById(id);

  const dataId = data && !isLoading ? data : error;

  console.log(data);

  return (
    <div>
      <h1>{dataId?.title}</h1>
    </div>
  );
};

export default OurServicesId;
