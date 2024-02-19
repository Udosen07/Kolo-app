import FinChart from "../components/FinChart";
import FinForm from "../components/FinForm";

const Home = () => {
  return (
    <div className="container mx-auto my-4 px-4">
      <h1 className="text-2xl text-green-700 font-bold text-center md:text-6xl">KOLO</h1>
      <FinForm/>
      <FinChart/>
    </div>
  )
}

export default Home;
