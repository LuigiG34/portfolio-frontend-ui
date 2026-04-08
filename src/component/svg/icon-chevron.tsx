export default function IconChevron({ open }: { open: boolean }) {
  return (
    <svg
        width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
    >
        <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
