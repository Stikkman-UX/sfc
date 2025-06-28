import { Advanced } from "./components/advanced";
import { Hero } from "./components/hero";
import { Impact } from "./components/impact";
import { Join } from "./components/join";
import { Leading } from "./components/leading";
import { News } from "./components/news";
import { Success } from "./components/success";

export default function Home() {
  return (
    <div className="min-h-dvh w-full overflow-hidden">
      <Hero/>
      <Join/>
      <Advanced/>
      <Leading/>
      <Impact/>
      <Success/>
      <News/>
    </div>
  );
}