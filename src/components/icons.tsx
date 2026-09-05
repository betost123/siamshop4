import * as React from "react";

type IconProps = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: "false" as const,
});

export const PinIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg {...base(size)} className={className}>
    <path d="M20 10.5c0 5.25-8 12-8 12s-8-6.75-8-12a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10.5" r="3" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg {...base(size)} className={className}>
    <path d="M6.5 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2L21 14.5v3a2.5 2.5 0 0 1-2.7 2.5A16.8 16.8 0 0 1 4 5.7 2.5 2.5 0 0 1 6.5 3Z" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.2l3.2 2" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.8 7 7.1 5.3a2 2 0 0 0 2.2 0L20.2 7" />
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path d="M14 8.4V6.9c0-.7.4-1 1-1h1.6V3.1L14.3 3C11.8 3 10.7 4.6 10.7 7v1.4H8.6v2.9h2.1V21H14v-9.7h2.4l.4-2.9H14Z" />
  </svg>
);

export const ArrowIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg {...base(size)} className={className}>
    <path d="M5 12h13m-5.5-5.5L18.5 12 12.5 17.5" />
  </svg>
);
