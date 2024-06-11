import Sidebar from "@/components/Siderbar.js";
import Dashboard from "@/components/Dashboard.js";
import styles from "@/styles/Home.module.css";

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Dashboard />
    </div>
  );
}


