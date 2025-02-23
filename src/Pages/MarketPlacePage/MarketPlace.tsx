import { Search, SlidersHorizontal } from "lucide-react";
import styles from "./MarketPlace.module.css";
import ItemCard from "../../Components/ItemCard/ItemCard";
import img1 from "../../assets/ip13pro.jpg";
import img2 from "../../assets/airmax.jpg";
import img3 from "../../assets/macbookpro.jpg";
import img4 from "../../assets/jjk-mangacover.jpg";
import img5 from "../../assets/asahi.jpg";

const Marketplace = () => {
  //sample for testing purposes. DB will be used later.
  const sampleItems = [
    {
      id: "1",
      image: img1,
      category: "Electronics",
      name: "iPhone 13 Pro - Excellent Condition",
      price: 799,
      currency: "€",
      location: "Berlin",
      seller: { name: "John Doe", rating: 4 },
      date: "2024-02-23",
      condition: "Like New",
    },
    {
      id: "2",
      image: img2,
      category: "Fashion",
      name: "Nike Air Max - Size 42",
      price: 89,
      currency: "€",
      location: "Munich",
      seller: { name: "Jane Smith", rating: 5 },
      date: "2024-02-22",
      condition: "New",
    },
    {
      id: "3",
      image: img3,
      category: "Electronics",
      name: "MacBook Pro 2021 - 16GB RAM",
      price: 1189,
      currency: "€",
      location: "Vienna",
      seller: { name: "Test Elek", rating: 3 },
      date: "2024-02-22",
      condition: "New",
    },
    {
      id: "4",
      image: img4,
      category: "Manga",
      name: "JJK - Volume 1",
      price: 8.9,
      currency: "€",
      location: "Linz",
      seller: { name: "Jürgen Smith", rating: 5 },
      date: "2023-02-22",
      condition: "Slightly used",
    },
    {
      id: "5",
      image: img5,
      category: "Drinks",
      name: "Asahi Super Dry - 6 Pack",
      price: 11.89,
      currency: "€",
      location: "Mattersburg",
      seller: { name: "Stefan Julius", rating: 3 },
      date: "2025-01-12",
      condition: "Unoepened",
    },
    // Add more sample items...
  ];

  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        {/* Search and Filter Section */}
        <div className={styles.searchSection}>
          <div className={styles.searchContainer}>
            <div className={styles.searchInputWrapper}>
              <Search className={styles.searchIcon} size={20} />
              <input
                type="text"
                placeholder="Search items..."
                className={styles.searchInput}
              />
            </div>
            <button className={styles.filterButton}>
              <SlidersHorizontal size={20} />
              Filters
            </button>
          </div>

          {/* Category Pills */}
          <div className={styles.categories}>
            {[
              "All",
              "Electronics",
              "Fashion",
              "Home",
              "Sports",
              "Cars",
              "Books",
            ].map((category) => (
              <button
                key={category}
                className={`${styles.categoryPill} ${
                  category === "All" ? styles.active : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className={styles.resultsInfo}>
          <span>Showing 245 items</span>
          <div className={styles.sortSelect}>
            <select className={styles.select}>
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>

        {/* Items Grid */}
        <div className={styles.itemsGrid}>
          {sampleItems.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Marketplace;
