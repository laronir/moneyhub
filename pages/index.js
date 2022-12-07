import Detail from "../modules/property-details";
import { Banner } from "../components/banner"
import { API_URL } from "../utils/const";

export async function getServerSideProps() {
  const res = await fetch(API_URL);
  const data = await res.json();

  return {
    props: data,
  };
}

export default function PropertyDetails(data) {
  return (
    <>
      <Banner>Property Details</Banner>
      {data.account &&
        <Detail account={data.account} />
      }
    </>
  );
}
