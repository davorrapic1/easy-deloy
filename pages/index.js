import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Hello world!</h1>
      <p>Im Next.js on Plus Hosting</p>
      <Image src="/spider.jpg" alt="spiderman meme" width={200} height={200} />
    </div>
  );
}
