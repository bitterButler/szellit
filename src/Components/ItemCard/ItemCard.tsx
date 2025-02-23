import { Heart, MapPin, Calendar } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ItemCard.module.css";

interface ItemProps {
  id: string;
  image: string;
  category: string;
  name: string;
  price: number;
  currency: string;
  location: string;
  seller: {
    name: string;
    rating: number;
  };
  date: string;
  condition: string;
}

const ItemCard = ({
  id,
  image,
  category,
  name,
  price,
  currency,
  location,
  seller,
  date,
  condition,
}: ItemProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/item/${id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
        <span className={styles.category}>{category}</span>
        <button
          onClick={toggleFavorite}
          className={`${styles.favoriteButton} ${
            isFavorite ? styles.favorited : ""
          }`}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>

        <div className={styles.price}>
          {currency} {price.toLocaleString()}
          <span className={styles.condition}>{condition}</span>
        </div>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <MapPin size={16} />
            <span>{location}</span>
          </div>
          <div className={styles.detailItem}>
            <Calendar size={16} />
            <span>{date}</span>
          </div>
        </div>

        <div className={styles.seller}>
          <div className={styles.sellerInfo}>
            <span className={styles.sellerName}>{seller.name}</span>
            <div className={styles.sellerRating}>
              {/* Create stars based on rating - there is no .5 rates currently */}
              {"★".repeat(seller.rating)}
              {"☆".repeat(5 - seller.rating)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
