import { useState } from "react";
import styles from "./ProfilePage.module.css";
import {
  UserCircle,
  Mail,
  Phone,
  Package,
  Settings,
  Shield,
} from "lucide-react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isAccountActive, setIsAccountActive] = useState(true);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Profile</h1>

        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tabButton} ${
                activeTab === "overview" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("overview")}
            >
              <UserCircle size={18} />
              Overview
            </button>
            <button
              className={`${styles.tabButton} ${
                activeTab === "activity" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("activity")}
            >
              <Package size={18} />
              Activity
            </button>
            <button
              className={`${styles.tabButton} ${
                activeTab === "settings" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("settings")}
            >
              <Settings size={18} />
              Settings
            </button>
            <button
              className={`${styles.tabButton} ${
                activeTab === "privacy" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("privacy")}
            >
              <Shield size={18} />
              Privacy
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === "overview" && (
              <div className={styles.grid}>
                <div className={styles.card}>
                  <h2 className={styles.cardTitle}>About Me</h2>
                  <div className={styles.cardContent}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>

                <div className={styles.card}>
                  <h2 className={styles.cardTitle}>Contact Information</h2>
                  <div className={styles.cardContent}>
                    <div className={styles.contactItem}>
                      <Mail size={18} />
                      <span>user@example.com</span>
                    </div>
                    <div className={styles.contactItem}>
                      <Phone size={18} />
                      <span>+1 234 567 890</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "activity" && (
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Transaction History</h2>
                <div className={styles.cardContent}>
                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Items Sold</h3>
                    <div className={styles.emptyState}>No items sold yet</div>
                  </div>
                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Items Purchased</h3>
                    <div className={styles.emptyState}>No purchase history</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Account Settings</h2>
                <div className={styles.cardContent}>
                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>Notifications</h3>
                    <div className={styles.settingItem}>
                      <label>Email Notifications</label>
                      <input type="checkbox" />
                    </div>
                    <div className={styles.settingItem}>
                      <label>Marketing Emails</label>
                      <input type="checkbox" />
                    </div>
                  </div>
                  <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>
                      Language Preferences
                    </h3>
                    <select className={styles.select}>
                      <option value="en">English</option>
                      <option value="hu">Hungarian</option>
                      <option value="de">German</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "privacy" && (
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Account Status</h2>
                <div className={styles.cardContent}>
                  <div className={styles.statusToggle}>
                    <div>
                      <h3 className={styles.sectionTitle}>
                        Account Active Status
                      </h3>
                      <p className={styles.statusText}>
                        {isAccountActive
                          ? "Your account is currently active"
                          : "Your account is currently deactivated"}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={isAccountActive}
                      onChange={(e) => setIsAccountActive(e.target.checked)}
                    />
                  </div>
                  <div className={styles.warningBox}>
                    <p>
                      Deactivating your account will hide your profile and
                      listings from other users. You can reactivate your account
                      at any time.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
