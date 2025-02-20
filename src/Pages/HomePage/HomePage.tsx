import { Search, ArrowRight } from "lucide-react";
import styles from "../HomePage/HomePage.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Buy and Sell with Confidence</h1>
          <p className={styles.heroSubtitle}>
            Join thousands of users who trust Szellit for their marketplace
            needs. Fast, secure, and reliable.
          </p>
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} size={20} />
              <input
                type="text"
                placeholder="What are you looking for?"
                className={styles.searchInput}
              />
            </div>
            <button className={styles.searchButton}>Search</button>
          </div>
          <div className={styles.categoriesContainer}>
            {["Electronics", "Fashion", "Home", "Cars", "Sports"].map(
              (category) => (
                <button key={category} className={styles.categoryButton}>
                  {category}
                </button>
              )
            )}
          </div>
        </div>
        <div className={styles.statsContainer}>
          {[
            { title: "Active Users", value: "50K+" },
            { title: "Items Sold", value: "100K+" },
            { title: "Customer Rating", value: "4.8/5" },
          ].map((stat) => (
            <div key={stat.title} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statTitle}>{stat.title}</div>
            </div>
          ))}
        </div>
        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton}>
            Start Selling Now
            <ArrowRight className={styles.ctaIcon} size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
