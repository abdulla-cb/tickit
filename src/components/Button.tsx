import { cn, color, text, pressable } from '@coinbase/onchainkit/theme';

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  text?: string;
  onClick?: () => void;
};

export default function Button({ className, onClick, children }: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        pressable.primary,
        text.headline,
        color.inverse,
        'inline-flex min-w-[153px] items-center justify-center rounded-xl px-4 py-3',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
