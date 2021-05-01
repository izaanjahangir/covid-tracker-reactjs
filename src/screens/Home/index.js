import StatsOverview from "../../components/StatsOverview";
import Background from "../../components/Background";

function Home() {
  return (
    <Background>
      <div className="mx-auto container h-full">
        <div className="mx-auto max-w-5xl">
          <StatsOverview />
        </div>
      </div>
    </Background>
  );
}

export default Home;
