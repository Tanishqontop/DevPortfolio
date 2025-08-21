import * as React from "react";
import { cn } from "./lib/utils"; // Adjust path according to your folder structure

const MinimalCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { href?: string }
>(({ className, href, children, ...props }, ref) => {
  if (href) {
    return (
      <h3 ref={ref} className={cn("mt-2 ml-2.5 px-1 text-lg font-semibold leading-tight justify-items-center-safe", className)} {...props}>
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
          {children}
        </a>
      </h3>
    );
  }

  return (
    <h3
      ref={ref}
      className={cn("mt-2 ml-2.5 px-1 text-lg font-semibold leading-tight text-white justify-items-center-safe", className)}
      {...props}
    >
      {children}
    </h3>
  );
});
MinimalCardTitle.displayName = "MinimalCardTitle";
