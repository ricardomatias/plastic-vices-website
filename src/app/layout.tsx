import type { Metadata } from "next";
import { Big_Shoulders_Display, Kanit } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders_Display({
	variable: "--font-big-shoulders",
	subsets: ["latin"],
});

const kanit = Kanit({
	variable: "--font-kanit",
	weight: ["100", "200", "400"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Plastic Vices",
	description: 'New EP "Roll Credits" out now!"',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${kanit.variable} ${bigShoulders.variable}`}>
			<body className="antialiased bg-background">{children}</body>
		</html>
	);
}
