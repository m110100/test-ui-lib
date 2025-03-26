import { Slot } from '@radix-ui/react-slot';
import { type ButtonHTMLAttributes, forwardRef} from 'react';
import styles from './button.component.module.scss';
import {Variant, Size} from "@cdk/types";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?:
        | 'Primary'
        | 'SecondaryNeutral'
        | 'SecondaryColor'
        | 'TertiaryNeutral'
        | 'TertiaryColor';
    size?: 'sm' | 'md' | 'icon';
    asChild?: boolean;
};

const Button = forwardRef<HTMLButtonElement, TButtonProps>(
    ({ className, variant = 'Primary', size = 'md', asChild = false, ...props }, ref) => {
        const Component = asChild ? Slot : 'button';

        return (
            <Component
                data-size={size}
                className={`text-sm ${styles.Button} ${variant ? styles[`${variant}`] : ''} ${className || ''}`}
                ref={ref}
                {...props}
            />
        );
    },
);

Button.displayName = 'Button';

export { Button };