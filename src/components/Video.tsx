"use client";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

export const Video = () => {
	return (
		<ReactPlayer
			url="https://vimeo.com/1049761027/4da1a9e338?ts=0&share=copy"
			width={"100%"}
			height={"100%"}
			playing
			loop
			muted
			controls={false}
			suppressHydrationWarning
		/>
	);
};
