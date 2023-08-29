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

export default function Home() {
    return (
        <main className="h-screen flex flex-col justify-center items-center">
            <h1>Kudoss App: Tailwind CSS is working</h1>
            <FamilyName>
                <Name name="Ike" />
                <Name name="Melack" />
                <Name name="Ezinne" />
                <Name name="Brooketawit" />
                <Name name="Dubois" />
            </FamilyName>
        </main>
    );
}
