export function VegMark({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center w-4 h-4 border-[1.5px] border-[#1F7A3E] rounded-[2px] shrink-0 ${className}`}
      title="Pure Vegetarian"
      aria-label="Pure Vegetarian"
    >
      <span className="w-2 h-2 rounded-full bg-[#1F7A3E]" />
    </span>
  );
}
