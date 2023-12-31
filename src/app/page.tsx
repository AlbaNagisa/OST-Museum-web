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
            Cet espace mus&eacute;ographique en deux dimensions permet de naviguer &agrave; travers diff&eacute;rents univers de la pop culture. Cherchez les jukebox dans les diff&eacute;rentes salles et interagissez avec eux afin de d&eacute;couvrir de nouvelles musiques ! Chaque jukebox a une playlist compl&egrave;tement diff&eacute;rente, saurez-vous reconna&icirc;tre tous les morceaux que vous &eacute;coutez ?
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
              role="Level Designer"
              image="https://i.imgur.com/fZp3iru.jpg"
            />
          </div>
          <div className="xl:flex xl:flex-col">
            <Card
              name="Nathan"
              role="D&eacute;veloppeur Unity"
              image="https://i.imgur.com/dj3lIBC.jpg"
            />
            <Card
              name="Nicolas"
              role="Recherche d&apos;assets"
              image="https://i.imgur.com/tPO4rKv.jpg"
            />
          </div>
          <div className="xl:flex xl:flex-col">
            <Card
              name="C&eacute;dric"
              role="Int&eacute;grateur Unity"
              image="https://i.imgur.com/Gkz2lsY.png"
            />
          </div>
        </div>
        <div className="text-[10px]">Made by Alban with ❤️</div>
      </div>
    </div>
  );
}
