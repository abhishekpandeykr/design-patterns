import WelcomeMessage from "./WelcomeMessage"

const DashboardContent = ({user}) => (
    <div>
        <h2>The Dashboard</h2>
        <WelcomeMessage user={user} />
    </div>
)

export default DashboardContent