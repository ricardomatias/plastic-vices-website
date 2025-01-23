import { Video } from "@/components/Video";
import VideoComponent from "@/components/video-component";
import { Vimeo } from "@/components/Vimeo";
import Image from "next/image";
import { Suspense } from "react";
import { Input } from "@/components/ui/input";


export default function Home() {
	return (
		<div className="grid grid-cols-12 auto-rows-[var(--my-grid-rows)] gap-y-20 min-h-screen pb-20 p-5">
			<nav className="col-span-12 flex justify-end">
				<h1 className="text-7xl font-bold text-foreground">PLASTIC VICES</h1>
			</nav>
			<div className="col-span-full h-[720px]">
				<Suspense fallback={null}>
					<Video  />
				</Suspense>
			</div>
			<div className="col-span-full row-span-2 lg:col-span-4 lg:col-start-3 z-10 h-full">
				<h3 className="text-5xl font-thin col-span-full font-kanit">ROLL CREDITS</h3>
				<h3 className="text-2xl col-span-full font-bold mb-10">THE FIRST EP IS OUT</h3>
				<Image
					src="/roll-credits-cover-final.jpg"
					alt="Roll Credits Cover"
					width={1024}
					height={1024}
					sizes="(max-width: 1024px) 100vw, 1024px"
					className="object-contain"
				/>
			</div>
			<div className="col-span-full row-span-2 lg:col-span-4 z-10 h-full">

			</div>
		</div>
	);
}
