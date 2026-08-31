/**
 * Placeholder Casa Jirafa logo mark: a minimal giraffe head silhouette in the
 * brand amber. Purely decorative — real branding replaces this later — so it is
 * marked `aria-hidden` and paired with a text wordmark by callers.
 *
 * @param size - Square edge length in pixels. Defaults to 32.
 * @param className - Optional extra classes for positioning.
 */
export function GiraffeMark({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* neck + head */}
      <path
        d="M18 44c0-6 1-11 2-15 1-4 1-8 1-12 0-4 2-7 6-7 3 0 5 2 6 5l3 8c1 3 2 5 2 9 0 3-1 6-3 7"
        stroke="#c54b34"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* ossicones */}
      <path d="M24 10V6M31 11l1-4" stroke="#c54b34" strokeWidth="3" strokeLinecap="round" />
      {/* spots */}
      <circle cx="24" cy="30" r="2" fill="#78716c" />
      <circle cx="21" cy="38" r="1.8" fill="#78716c" />
      <circle cx="28" cy="22" r="1.8" fill="#78716c" />
    </svg>
  );
}
