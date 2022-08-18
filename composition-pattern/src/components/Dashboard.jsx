import DashboardContent from "./DashboardContent";
import DashboardNav from "./DashboardNav";

const Dashboard = ({children}) => (
    <div>
        <h2>The Dashboard</h2>
        {/* <DashboardNav />
        <DashboardContent user={user} /> */}
        {children}
    </div>
)

export default Dashboard;