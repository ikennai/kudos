export type ButtonVariants = 'primary' | 'default'

export interface IButton {
    action: any
    variant?: ButtonVariants
    text: string
}

const buttonClasses = {
    default: 'py-1 px-2 bg-black text-white text-sm rounded-lg hover:bg-black/80'
}

export default function Button(props: IButton) {
    // TODO: Handle children being inserted
    const {
        action,
        text,
        variant = 'default'
    } = props;

    // Methods
    const getClasses = (variant: string) => (buttonClasses[variant])

    return (
        <button
            className={getClasses(variant)}
            onClick={action}
        >
            {text}
        </button>
    )
}

/**
 * Pass button type classes to the wrappepd component
 * @param WrappedButton 
 * @returns 
 */
export function withButton(WrappedButton: any) {
    return (props: any) => {
        const {
            variant = 'default',
            className,
            ...rest
        } = props;

        console.log('>>> The rest: ', rest)

        return <WrappedButton className={`${buttonClasses[variant]} ${className}`} {...rest} />
    }
}