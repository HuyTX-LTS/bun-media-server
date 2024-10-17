import { Show } from "./Show";

interface IMediaProps {
  src: string;
  mimeType: string;
}

export function Media({ src, mimeType }: IMediaProps) {
  return (
    <>
      <Show if={mimeType.startsWith("video")}>
        <video style={{
          width: "100%",
          height: "auto",
        }} controls>
          <source src={src} />
        </video>
      </Show>

      <Show if={mimeType.startsWith("audio")}>
        <audio controls>
          <source src={src} />
        </audio>
      </Show>
    </>
  );
}
