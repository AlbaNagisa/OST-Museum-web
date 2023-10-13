"use client";
import YouTube, { YouTubeProps } from "react-youtube";
import Pitch from "./components/Pitch";
import Topbar from "./components/Topbar";
import Card from "./components/Card";

export default function Home() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className="flex justify-center">
      <div className="w-[90%] flex flex-col items-center mt-4">
        <Topbar />
        <Pitch />
        <div className="flex flex-col xl:flex-row justify-between mt-28 items-center w-full xl:h-full text-[20px]">
          <div className="flex w-[50%] bg-[#011936]  rounded-3xl p-4 items-center justify-center flex-col">
          \x43\x65\x74\x20\x65\x73\x70\x61\x63\x65\x20\x6d\x75\x73\xc3\xa9\x6f\x67\x72\x61\x70\x68\x69\x71\x75\x65\x20\x65\x6e\x20\x64\x65\x75\x78\x20\x64\x69\x6d\x65\x6e\x73\x69\x6f\x6e\x73\x20\x70\x65\x72\x6d\x65\x74\x20\x64\x65\x20\x6e\x61\x76\x69\x67\x75\x65\x72\x20\xc3\xa0\x20\x74\x72\x61\x76\x65\x72\x73\x20\x64\x69\x66\x66\xc3\xa9\x72\x65\x6e\x74\x73\x20\x75\x6e\x69\x76\x65\x72\x73\x20\x64\x65\x20\x6c\x61\x20\x70\x6f\x70\x20\x63\x75\x6c\x74\x75\x72\x65\x2e\x20\x43\x68\x65\x72\x63\x68\x65\x7a\x20\x6c\x65\x73\x20\x6a\x75\x6b\x65\x62\x6f\x78\x20\x64\x61\x6e\x73\x20\x6c\x65\x73\x20\x64\x69\x66\x66\xc3\xa9\x72\x65\x6e\x74\x65\x73\x20\x73\x61\x6c\x6c\x65\x73\x20\x65\x74\x20\x69\x6e\x74\x65\x72\x61\x67\x69\x73\x73\x65\x7a\x20\x61\x76\x65\x63\x20\x65\x75\x78\x20\x61\x66\x69\x6e\x20\x64\x65\x20\x64\xc3\xa9\x63\x6f\x75\x76\x72\x69\x72\x20\x64\x65\x20\x6e\x6f\x75\x76\x65\x6c\x6c\x65\x73\x20\x6d\x75\x73\x69\x71\x75\x65\x73\x20\x21\x20\x43\x68\x61\x71\x75\x65\x20\x6a\x75\x6b\x65\x62\x6f\x78\x20\x61\x20\x75\x6e\x65\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x63\x6f\x6d\x70\x6c\xc3\xa8\x74\x65\x6d\x65\x6e\x74\x20\x64\x69\x66\x66\xc3\xa9\x72\x65\x6e\x74\x65\x2c\x20\x73\x61\x75\x72\x65\x7a\x2d\x76\x6f\x75\x73\x20\x72\x65\x63\x6f\x6e\x6e\x61\xc3\xae\x74\x72\x65\x20\x74\x6f\x75\x73\x20\x6c\x65\x73\x20\x6d\x6f\x72\x63\x65\x61\x75\x78\x20\x71\x75\x65\x20\x76\x6f\x75\x73\x20\xc3\xa9\x63\x6f\x75\x74\x65\x7a\x20\x3f
          </div>
          <div className="flex w-[50%] justify-center mt-28 xl:mt-0">
            <YouTube videoId="Y4tiL_-yEwc" onReady={onPlayerReady} />
          </div>
        </div>
        <div className="flex w-[80%] bg-[#011936] rounded-3xl p-4  mt-28 flex-col xl:flex-row justify-between mb-28">
          <div className="xl:flex xl:flex-col">
            <Card
              name="Alban"
              role="Chef de projet"
              image="https://i.imgur.com/N4HUkSV.jpg"
            />
            <Card
              name="James"
              role="Level Design"
              image="https://i.imgur.com/fZp3iru.jpg"
            />
          </div>
          <div className="xl:flex xl:flex-col">
            <Card
              name="Nathan"
              role="Developpeur Unity"
              image="https://i.imgur.com/dj3lIBC.jpg"
            />
            <Card
              name="Nicolas"
              role="Recherche d'assets"
              image="https://i.imgur.com/tPO4rKv.jpg"
            />
          </div>
          <div className="xl:flex xl:flex-col">
            <Card
              name="Cedric"
              role="Integrateur Unity"
              image="https://i.imgur.com/Gkz2lsY.png"
            />
          </div>
        </div>
        <div className="text-[10px]">Made by Alban with ❤️</div>
      </div>
    </div>
  );
}
