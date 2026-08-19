export function HoverRoll({ text }: { text: string }) {
  return (
    <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      <span className="flex flex-col gap-[6px] transition-transform duration-300 ease-out group-hover:-translate-y-[calc(1.2em+6px)]">
        <span className="leading-[1.2]">{text}</span>
        <span aria-hidden="true" className="leading-[1.2]">
          {text}
        </span>
      </span>
    </span>
  );
}
