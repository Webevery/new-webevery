import DashboardLoginSection from "@/sections/dashboardLoginSection/DashboardLoginSection"
import { Suspense } from "react"

const LoginPage = () => {
    return (
        <Suspense>
            <DashboardLoginSection />
        </Suspense>
    )
}

export default LoginPage