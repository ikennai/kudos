
import React, { useState } from 'react';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server"
import { withButton } from '@/components/Button';

// import Login from '@/components/Login';

export function FamilyName({ children }: { children: React.JSX.Element[] }) {
    const family = children.map((child) => {
        // console.log('Child Props: ', child.props);
        return React.cloneElement(child, {
            ...child.props,
            name: child.props.name + ' Igwe',
        });
    });

    return <div>{family}</div>;
}

export const Name = ({ name }: { name: string }) => {
    return <div>{name}</div>;
};

// Higher Order Componeont
// const HOC = (WrappedComponent) => {
//     // Dont do thisi and mutate the original component
//     WrappedComponent = () => { };

//     return <></>;
// };

// const withMousePosition = (WrappedComponent) => {
//     return (props: any) => {
//         const [mousePosition, setMousePosition] = useState({
//             x: 0,
//             y: 0,
//         });

//         return <WrappedComponent {...props} />;
//     };
// };

const LoginLinkWithButton = withButton(LoginLink)
const RegisterLinkWithButton = withButton(RegisterLink)

export default function Home() {
    // const router = useRouter();

    // Methods
    // const handleSignup = () => {
    //     router.push('/api/auth/signin');
    // };

    return (
        <section className="flex flex-col w-full justify-center items-center">
            <h1>Kudoss App: Tailwind CSS is working</h1>
            <FamilyName>
                <Name name="Ike" />
                <Name name="Melack" />
                <Name name="Ezinne" />
                <Name name="Brooketawit" />
                <Name name="Dubois" />
            </FamilyName>

            {/* <div>
                <Button action={handleSignup} text="Sign In" />
            </div> */}

            <div className="p-10 text-center">
                <h2>Kinde Login</h2>
                <div className="flex items-center justify-center gap-4 mt-6">
                    <LoginLinkWithButton variant="default">Sign in</LoginLinkWithButton>
                    <RegisterLinkWithButton>Sign up</RegisterLinkWithButton>
                    {/* <LogoutLink>Log out</LogoutLink> */}
                </div>
            </div>
        </section>
    );
}
