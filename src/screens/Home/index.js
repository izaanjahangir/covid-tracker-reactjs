import StatsOverview from "../../components/StatsOverview";
import Background from "../../components/Background";
import LineGraph from "../../components/LineGraph";

function Home() {
  return (
    <Background>
      <div className="mx-auto container h-full">
        <div className="mx-auto max-w-5xl">
          <StatsOverview />
          <div className="mt-2 flex">
            <div className="mx-4 sm:mx-0 rounded-md flex-1 bg-white p-2 shadow-2xl border border-gray-300">
              <LineGraph />
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}

export default Home;
