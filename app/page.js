import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import { parisienne } from "./layout";
import { inter } from "./layout";

export default function Home() {
  return (
    <main>
      <Banner
        parisienneClassname={parisienne.className}
        interClassname={inter.className}
      />
      <SideBar/>
    </main>
  );
}
