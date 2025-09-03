import NextLink from "next/link";

import { cn } from "@/lib/utils";
import { PageTitle } from "@/components/ui/page-header";
import { FadeUp } from "@/components/transitions";

function Link({ className, href, ...props }: React.ComponentProps<typeof NextLink>) {
	return (
		<NextLink
			href={href}
			target={href.toString().startsWith("/") ? "_self" : "_blank"}
			className={cn("decoration-gradient text-accent-purple dark:text-accent-pink font-medium", className)}
			{...props}
		/>
	);
}

export default function AboutPage() {
	return (
		<div className="flex w-full max-w-4xl flex-col space-y-4 **:[h2]:!mb-1 **:[h2]:!text-xl **:[h2]:font-bold **:[h2]:md:!text-2xl **:[p]:!leading-6">
			<PageTitle>About Me</PageTitle>
			<FadeUp transition={{ delay: 0.4 }}>
				<p>
					Hi, I&apos;m Ali Hamas, a self-taught developer, who&apos;s currently pursuing a full-stack development to
					create stunning user experiences on the front-end, scalable, and secure infrastructure on the backend. I
					recently developed a <Link href="/projects/twitter-clone">Twitter Clone</Link> using next.js and supabase,
					which showcases my skills in combining frontend and backend technologies.
				</p>
			</FadeUp>
			<FadeUp transition={{ delay: 0.6 }}>
				<h2>Web Design</h2>
				<p>
					My journey into the field of computers began in 2021. Back then, I had no clue about programming as I
					did&apos;t study computer in matriculation or intermediate and thought it was an extremely tough field to get
					into. I decided to start with something more visual and began learning Adobe Illustrator for logo designing,
					aiming to become a web designer. But, as it turns out, I wasn&apos;t very good at designing and quickly
					realized it wasn&apos;t the right path for me.
				</p>
			</FadeUp>
			<FadeUp transition={{ delay: 0.8 }}>
				<h2>Start of Programming</h2>
				<p>
					I eventually found my way to programming, starting with C++. I learned the basics of programming concepts like
					data types, functions and loop which are similar across many languages. However, I had to pause my learning to
					focus on my studies as I was in my second year of college.
				</p>
			</FadeUp>
			<FadeUp transition={{ delay: 1 }}>
				<h2>Web Development Begins</h2>
				<p>
					After completing my second year, I shifted my focus to web development, starting with HTML, CSS, and
					JavaScript. Initially, I found it slow-going, but persistence paid off. I built my first portfolio website and
					later updated it to this portfolio. I also created several projects, including a to-do app, a music player,
					and a Netflix homepage clone (logged-out version). Then, I started working with APIs, building projects like
					Weather App, QR Code Generator, and Daily Quote Generator, available at{" "}
					<Link href="https://portfolio-alihamas.vercel.app/#projects">first portfolio website</Link>
				</p>
			</FadeUp>
			<FadeUp transition={{ delay: 1.2 }}>
				<h2>Starting React & Tailwind CSS</h2>
				<p>
					I then discovered React, which opened up a new world of possibilities. I started by learning the basics of
					React but struggled with CSS. So, I turned to Tailwind CSS, a utility-first CSS framework that made styling
					especially conditional styling a breeze. I mastered the basics of React, including JSX components, props,
					useState, useRef, useMemo, and the context API.
				</p>
			</FadeUp>
			<FadeUp transition={{ delay: 1.4 }}>
				<h2>Simple Projects in React</h2>
				<p>
					I began creating simple projects, starting with a basic <Link href="/projects/todo-app">To-Do App</Link> that
					stored data locally. As I improved, I added features like editing, deleting, and filtering to the app. Then, I
					came up with a new project idea inspired by Chrome. I stumbled upon new tab extensions in the Chrome Web Store
					and found them far more engaging than the default Chrome new tab page. So, I thought, why not create my own
					extension? I built the <Link href="/projects/itab">iTab - Chrome New Tab</Link>, using React and started using
					it as an offline extension. It was a great learning experience, and I still use it as my personal new tab
					page.
				</p>
			</FadeUp>
			<FadeUp transition={{ delay: 1.6 }}>
				<h2>Exploring Backend & Full Stack Projects</h2>
				<p>
					At that point, my aim is to become a full-stack developer, so i wanted to goes for Express. This led me to
					explore Backend-as-a-Service(BaaS) solutions like Appwrite, Firebase & Supabase, which made me realize the
					potential of integrating backend features seamlessly and effortlessly. Excited to showcase my skills to
					friends and family, I created <Link href="/projects/chaty">Chaty - Public Chat Room</Link> with a single room
					with functionalities like editing and deleting messages. Next, I began working on my dream project, a fully
					functional <Link href="/projects/twitter-clone">Twitter Clone</Link> with user authentication, liking,
					commenting, following, and reposting features. Users can even edit their profiles.
				</p>
			</FadeUp>
			<FadeUp transition={{ delay: 1.8 }}>
				<p>
					Thanks for reading my story! I&apos;m currently exploring backend development and excited to take on new
					challenges. If you have any opportunities or projects in mind, I&apos;m available for full-stack
					collaborations. Feel free to connect with me.
				</p>
			</FadeUp>
		</div>
	);
}
