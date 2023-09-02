import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server"

export default function Login() {
    return (
        <div className="p-10">
            <h2>Kinde Login</h2>
            <div>
                <LoginLink>Sign in</LoginLink>
                <RegisterLink>Sign up</RegisterLink>
                {/* <LogoutLink>Log out</LogoutLink> */}
            </div>
        </div>
    )
}