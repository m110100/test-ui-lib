import { Slot } from '@radix-ui/react-slot';
import { type ButtonHTMLAttributes, forwardRef} from 'react';
import {Variant, Size} from "@cdk/types";
import cn from "classnames";
import styles from './button.module.scss';

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant,
    size?: Size;
    asChild?: boolean;
};

const Button = forwardRef<HTMLButtonElement, TButtonProps>(
    ({ className, variant = 'primary', size = 'sm', asChild = false, ...props }, ref) => {
        const Component = asChild ? Slot : 'button';

        return (
            <Component
                data-variant={variant}
                data-size={size}
                className={cn(styles.btn, className)}
                ref={ref}
                {...props}
            />
        );
    },
);

Button.displayName = 'Button';

export { Button };