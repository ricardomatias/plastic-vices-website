import { Video } from "@/components/Video";
import VideoComponent from "@/components/video-component";
import { Vimeo } from "@/components/Vimeo";
import Image from "next/image";
import { Suspense } from "react";
import { Input } from "@/components/ui/input";


export default function Home() {
	return (
		<main className="grid grid-cols-12 auto-rows-min gap-y-10 p-5 max-w-7xl mx-auto">
			<nav className="col-span-full flex justify-end">
				<h1 className="text-7xl font-bold text-foreground">PLASTIC VICES</h1>
			</nav>
			<div className="col-span-full min-h-[100vw] lg:min-h-fit lg:h-[720px] px-5 lg:p-10 relative flex justify-center items-center">
				<Suspense fallback={null}>
					<Video />
				</Suspense>
			</div>
			<div className="col-span-full grid grid-cols-12 gap-y-10 xl:gap-10 z-50">
				<div className="col-span-full lg:col-span-4 lg:col-start-3 h-full flex flex-col">
					<h3 className="text-5xl font-thin col-span-full font-kanit">ROLL CREDITS</h3>
					<h3 className="text-2xl col-span-full font-bold mb-10">THE FIRST EP IS OUT</h3>
					<img
						src="/roll-credits-cover-final.jpg"
						alt="Roll Credits Cover"
						className="object-contain w-full max-w-xs md:max-w-md mx-auto"
					/>
				</div>
				<div className="col-span-full row-span-2 lg:col-span-4 h-full flex flex-col lg:items-center lg:mt-16">
					<h3 className="text-3xl font-thin font-kanit block mb-5">Available at</h3>
					<ul className="flex flex-col gap-5">
						<li className="text-2xl font-bold cursor-pointer flex">
							<a
								href="https://music.apple.com/de/album/roll-credits-ep/1789307144?itscg=30200&itsct=music_box_badge&ls=1&app=music&mttnsubad=1789307144"
								className="block"
							>
								<img
									src="https://toolbox.marketingtools.apple.com/api/v2/badges/listen-on-apple-music/mono-white/en-us?releaseDate=1737676800"
									alt="Listen on Apple Music"
									className="object-contain h-[36px]"
								/>
							</a>
						</li>
						<li className="text-2xl font-bold cursor-pointer">
							<a
								href="https://open.spotify.com/album/2EJZNYFQOG8lEmZidmqZzP?si=-tGhb6tQR82MPx02fuCqLw"
								className=""
							>
								<img
									src="/Spotify_Full_Logo_RGB_White.png"
									alt="Listen on Spotify"
									className="object-contain align-middle h-[36px]"
								/>
							</a>
						</li>
						<li className="text-2xl font-bold cursor-pointer">
							<a
								href="https://amazon.com/music/player/albums/B0DSJFJYFR?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_L5QB6iHMutweekGAj5EkfZocH"
								className=""
							>
								<img
									src="/Amazon_Music_Logo_Horizontal_RGB_White_MASTER.svg"
									alt="Listen on Amazon Music"
									className="object-contain align-middle h-[36px]"
								/>
							</a>
						</li>
						<li className="text-2xl font-bold cursor-pointer">
							<a
								href="https://music.youtube.com/playlist?list=OLAK5uy_lc0aSP5BE-NF1S71E_idNBz1oYiDkSZLg&si=SrgKWH9vbrRcHdZ1"
								className=""
							>
								<img
									src="/yt_logo_mono_dark.png"
									alt="Listen on Youtube Music"
									className="object-contain align-middle h-[36px]"
								/>
							</a>
						</li>
					</ul>
					<p className="inline-block font-bigShoulders text-2xl font-bold mt-auto mb-10 lg:mb-28 ml-auto items-center">
						FOLLOW ON{" "}
						<a href="https://www.instagram.com/plasticvices/" className="inline-block ml-1 underline">
							INSTAGRAM
						</a>
					</p>
				</div>
			</div>
			<footer className="col-span-full grid grid-cols-2 gap-x-5 items-end">
				<p className="text-base font-light font-kanit">
					For any inquiries please contact{" "}
					<a className="underline" href="mailto:general@plasticvices.com">
						general@plasticvices.com
					</a>
				</p>
				<p className="text-2xl font-bigShoulders text-right">© 2025 Plastic Vices</p>
			</footer>
		</main>
	);
}
