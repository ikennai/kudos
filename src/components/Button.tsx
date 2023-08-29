'use client'

export type ButtonVariants = 'primary' | 'default'

export interface IButton {
    action: any
    variant?: ButtonVariants
    text: string
}

export default function Button(props: IButton) {
    // TODO: Handle children being inserted
    const { 
        action,
        text, 
        variant = 'default' 
    } = props;

    // Methods
    const getClasses = (variant: string) => {
        let classString = ''

        switch (variant) {
            case 'primary':
                break;
            default:
                classString = 'py-2 px-5 bg-gray-400 rounded-md'
        }

        return classString
    }

    return (
        <button
            className={getClasses(variant)}
            onClick={action}
        >
            {text}
        </button>
    )
}