import PortfolioGrid from "../../components/PortfolioGrid";
import { useFetch } from "../../Hooks/useFetch";

export default function Portfolio() {
    const { data, isPending, error } = useFetch('/data/db.json');

  return (
    <section className="portfolio">
      <h2 className="portfolio-bg-text">PORTFOLIO</h2>

      <div className="portfolio-content">
        <div className="text-line">
          <h2>PORTFOLIO</h2>
        </div>

        {error && <p className="error-message">{error}</p>}
        {isPending && <p className="loading-message">Loading...</p>}

        {/* IMPORTANT PART */}
        {data && <PortfolioGrid projects={data.projects} />}
      </div>
    </section>
  );
}
