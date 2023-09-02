import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server"

export default function Dashboard() {
    const { getUser, isAuthenticated } = getKindeServerSession()
    const user = getUser();

    console.log('>>> User: ', user)

    return (
        isAuthenticated() ?
            <div className="max-w-screen-lg mx-auto">
                <div className="flex justify-between py-5 items-center">
                    <h2>Dashboard</h2>
                    {user?.given_name && (
                        <div className="flex gap-4 items-center">
                            <div>Hi {user?.given_name}!</div>
                            <LogoutLink
                                className="bg-black hover:bg-black/80 text-white text-sm px-4 py-1 rounded-lg">Log out</LogoutLink>
                        </div>
                    )}
                </div>
            </div> :
            <div>Please sign in or register</div>
    )
}