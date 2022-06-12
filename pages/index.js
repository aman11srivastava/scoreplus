import AllVideosSection from "../components/AllVideosSection";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <h1>theYT</h1>
      {data &&
        data.map((val, index) => <AllVideosSection key={index} data={val} />)}
    </div>
  );
}

export async function getStaticProps() {
  const URL =
    " https://eb69c8de-c627-47d4-b0bd-246d961cbfd3.mock.pstmn.io/youtube?class=10th&subject=Maths";
  const res = await fetch(URL);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}
