'use client'

import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter()

    // Methods
    const handleSignup = () => {
        router.push('/api/auth/signin')
    }

    return (
        <main className="h-screen flex flex-col gap-4 justify-center items-center">
            <h1>Kudos App: Tailwind CSS is working</h1>
            <div>
                <Button
                    action={handleSignup}
                    text='Sign In'
                />
            </div>
        </main>
    );
}
