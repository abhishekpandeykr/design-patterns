import DashboardContent from "./DashboardContent";
import DashboardNav from "./DashboardNav";

const Dashboard = ({user}) => (
    <div>
        <h2>The Dashboard</h2>
        <DashboardNav />
        <DashboardContent user={user} />
    </div>
)

export default Dashboard;