import StatsOverview from "../../components/StatsOverview";
import Background from "../../components/Background";
import LineGraph from "../../components/LineGraph";
import "./style.css";

function Home() {
  return (
    <Background>
      <div id="main-container" className="mx-auto container h-full">
        <div className="mx-auto max-w-5xl">
          <StatsOverview />
          <div className="mt-2 flex mx-4 sm:mx-0">
            <div className="line-graph-main-container mr-2">
              <LineGraph />
            </div>
            <div className="select-location-main-container"></div>
          </div>
        </div>
      </div>
    </Background>
  );
}

export default Home;
