import { Header } from "./layout/Header";
import { Cards } from "./layout/Cards";

export default function Home() {
  return (
    <main className="max-w-[375px] rounded-[20px] p-[25px] desktop:max-w-[1140px]">
      <div className="text-center text-neutral-grayishblue">
        <Header />
        <Cards />
      </div>
    </main>
  );
}
