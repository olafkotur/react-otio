import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

export const Tooltip: React.FC<{
  content: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  delayDuration?: number;
  trigger: ReactNode;
  className?: string;
}> = ({ content, side = 'top', delayDuration = 0, trigger, className }) => {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger className="focus-visible:outline-none">{trigger}</TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            sideOffset={4}
            className={clsx(
              'z-50 overflow-hidden rounded-md bg-popover px-3 py-1.5 text-xs text-popover-foreground border border-border max-w-60',
              'animate-in fade-in-0 zoom-in-95',
              'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
              'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
              'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              className,
            )}
          >
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
