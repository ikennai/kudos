<<<<<<< HEAD
import Image from 'next/image';
import React, { useState } from 'react';

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
const HOC = (WrappedComponent) => {
    // Dont do thisi and mutate the original component
    WrappedComponent = () => {};

    return <></>;
};

const withMousePosition = (WrappedComponent: React.Component) => {
    return (props) => {
        const [mousePosition, setMousePosition] = useState({
            x: 0,
            y: 0,
        });
        return <WrappedComponent {...props} />;
    };
};
=======
'use client'

import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
>>>>>>> be5fac95145261ef1a70eac1c5d28dbed04d59f2

export default function Home() {
    const router = useRouter()

    // Methods
    const handleSignup = () => {
        router.push('/api/auth/signin')
    }

    return (
<<<<<<< HEAD
        <main className="h-screen flex flex-col justify-center items-center">
            <h1>Kudoss App: Tailwind CSS is working</h1>
            <FamilyName>
                <Name name="Ike" />
                <Name name="Melack" />
                <Name name="Ezinne" />
                <Name name="Brooketawit" />
                <Name name="Dubois" />
            </FamilyName>
=======
        <main className="h-screen flex flex-col gap-4 justify-center items-center">
            <h1>Kudos App: Tailwind CSS is working</h1>
            <div>
                <Button
                    action={handleSignup}
                    text='Sign In'
                />
            </div>
>>>>>>> be5fac95145261ef1a70eac1c5d28dbed04d59f2
        </main>
    );
}
