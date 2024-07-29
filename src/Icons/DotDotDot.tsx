export default function DotDotDot({ width = 23, className = 'fill-white' }: { width?: number; className?: string }) {
  return (
    <svg width={width} height={width} viewBox="0 0 23 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.3665 5.63185C12.883 5.63185 14.1123 4.43731 14.1123 2.96375C14.1123 1.4902 12.883 0.295654 11.3665 0.295654C9.84997 0.295654 8.62061 1.4902 8.62061 2.96375C8.62061 4.43731 9.84997 5.63185 11.3665 5.63185Z"
        className={className}
      />
      <path
        d="M3.12868 5.63173C4.64518 5.63173 5.87455 4.43718 5.87455 2.96363C5.87455 1.49008 4.64518 0.295532 3.12868 0.295532C1.61218 0.295532 0.382812 1.49008 0.382812 2.96363C0.382812 4.43718 1.61218 5.63173 3.12868 5.63173Z"
        className={className}
      />
      <path
        d="M19.6038 5.63185C21.1203 5.63185 22.3496 4.43731 22.3496 2.96375C22.3496 1.4902 21.1203 0.295654 19.6038 0.295654C18.0873 0.295654 16.8579 1.4902 16.8579 2.96375C16.8579 4.43731 18.0873 5.63185 19.6038 5.63185Z"
        className={className}
      />
    </svg>
  );
}
