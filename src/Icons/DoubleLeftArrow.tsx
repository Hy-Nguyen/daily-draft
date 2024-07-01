export default function DoubleLeftArrow({ width = '16' }: { width?: string }) {
  return (
    <svg width={width} height={width} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.63125 7.36875L5.76875 4.5L8.63125 1.63125L7.75 0.75L4 4.5L7.75 8.25L8.63125 7.36875Z"
        fill="#5A5C6F"
      />
      <path
        d="M4.63125 7.36875L1.76875 4.5L4.63125 1.63125L3.75 0.75L0 4.5L3.75 8.25L4.63125 7.36875Z"
        fill="#5A5C6F"
      />
    </svg>
  );
}
