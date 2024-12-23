import Navbar from './components/Navbar,';
import Hero from './components/Hero';
import DashboardChart from "./components/DashboardChart";
import Experience from './components/Experience';
import InteractiveGrid from './components/InteractiveGrid';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DashboardChart />
      <div className="h-48"></div>
      <InteractiveGrid />
      <div className="h-48"></div>
      <Experience />
      <Footer />
    </div>
  );
}
