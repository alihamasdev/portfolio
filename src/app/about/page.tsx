import Link from "next/link";
import Transition from "@/lib/transitions";
import Heading from "@/components/ui/page-heading";
import AnchorHeading from "@/components/ui/anchor-heading";

export default function About() {
	return (
		<section className="my-5 md:my-16">
			<title>About - Developer Portfolio | Ali Hamas</title>
			<Heading>About</Heading>
			<div className="prose mt-4 text-pretty text-sm leading-6 text-zinc-300 md:w-2/3 md:text-base">
				<Transition animation={{ name: "fade", delay: 0.1 }}>
					<p>
						Hi, I'm Ali Hamas, a passionate frontend developer currently diving into the world of
						backend development. I specialize in creating full-stack applications using
						Backend-as-a-Service (BaaS) platforms like Firebase and Appwrite. I recently developed a{" "}
						<Link href="">Twitter clone</Link> using Appwrite, which showcases my skills in
						combining frontend and backend technologies.
					</p>
					<br />
				</Transition>
				<Transition animation={{ name: "fade", delay: 0.2 }}>
					<AnchorHeading>Web Design</AnchorHeading>
					<p>
						My journey into the field of computers began during the COVID lockdown in 2021. Back
						then, I had no clue about programming and thought it was an extremely tough field to get
						into. I decided to start with something more visual and began learning Adobe Illustrator
						for logo designing, aiming to become a web designer. But, as it turns out, I wasn't very
						good at designing and quickly realized it wasn't the right path for me.
					</p>
					<br />
				</Transition>
				<Transition animation={{ name: "fade", delay: 0.3 }}>
					<AnchorHeading>Start of Programming</AnchorHeading>
					<p>
						I eventually found my way to programming, starting with C++. I learned the basics of
						programming concepts like data types, functions, loops, and object-oriented programming
						(OOP) principles, which are similar across many languages. However, when the lockdown
						ended, I had to pause my learning to focus on my studies as I was in my second year of
						college.
					</p>
					<br />
				</Transition>
				<Transition animation={{ name: "fade", delay: 0.4 }}>
					<AnchorHeading>Web Development Begins</AnchorHeading>
					<p>
						After completing my second year in 2023, I shifted my focus to web development, starting
						with HTML, CSS, and JavaScript. Initially, I found it slow-going, but persistence paid
						off. I built my first portfolio website and later updated it to this portfolio. I also
						created several projects, including a to-do app, a music player, and a Netflix homepage
						clone (logged-out version). Then, I started working with APIs, building projects like
						Weather App, QR Code Generator, and Daily Quote Generator, available at{" "}
						<a
							href="https://portfolio-alihamas.vercel.app/#projects"
							target="_blank"
							rel="noopener noreferrer"
						>
							first portfolio website
						</a>
					</p>
					<br />
				</Transition>
				<Transition animation={{ name: "fade", delay: 0.5 }}>
					<AnchorHeading>Starting React & Tailwind CSS</AnchorHeading>
					<p>
						I then discovered React, which opened up a new world of possibilities. I started by
						learning the basics of React but struggled with CSS. So, I turned to Tailwind CSS, a
						utility-first CSS framework that made styling especially conditional styling a breeze. I
						mastered the basics of React, including JSX components, props, useState, useRef,
						useMemo, and the context API.
					</p>
					<br />
				</Transition>
				<Transition animation={{ name: "fade", delay: 0.1, applyAt: "whileInView" }}>
					<AnchorHeading>Simple Projects in React</AnchorHeading>
					<p>
						I began creating simple projects, starting with a basic <Link href="/">To-Do App</Link>{" "}
						that stored data locally. As I improved, I added features like editing, deleting, and
						filtering to the app. My first API project in React was an e-commerce website that
						fetched products from the{" "}
						<a href="https://fakestoreapi.com/" target="_blank" rel="noopener noreferrer">
							Fake Store API
						</a>
						. It included a homepage, category pages (men, women, jewelry), and a dynamic single
						product page. Unfortunately, I lost this project when my laptop's SSD crashed, so it's
						not on GitHub. Then, I came up with a new project idea inspired by Chrome. I stumbled
						upon new tab extensions in the Chrome Web Store and found them far more engaging than
						the default Chrome new tab page. So, I thought, why not create my own extension? I built
						the <Link href="/">iTab - Chrome New Tab</Link>, using React and started using it as an
						offline extension. It was a great learning experience, and I still use it as my personal
						new tab page.
					</p>
					<br />
				</Transition>
				<Transition animation={{ name: "fade", delay: 0.1, applyAt: "whileInView" }}>
					<AnchorHeading>Freelancing & TypeScript</AnchorHeading>
					<p>
						At this point, I started freelancing to gain experience and earn some pocket money. It
						was challenging initially, but I soon landed my first project, which involved fixing
						some JavaScript issues. My cousin then introduced me to a client who needed work done on
						a project called Flick It, a client management website built with React and TypeScript.
						This experience showed me the importance of TypeScript in managing larger projects
						effectively, so I made it a part of my regular toolkit.
					</p>
					<br />
				</Transition>
				<Transition animation={{ name: "fade", delay: 0.1, applyAt: "whileInView" }}>
					<AnchorHeading>Exploring BaaS</AnchorHeading>
					<p>
						I've always dreamed of creating a functional Twitter clone. My first attempt was purely
						a design clone using HTML, CSS, JavaScript, and jQuery, displaying tweets stored in
						local storage without any interactive features like liking, commenting, or following. I
						then recreated it in React and Tailwind CSS, again without functionality. This led me to
						explore BaaS solutions like Appwrite, which made me realize the potential of integrating
						backend features seamlessly.
					</p>
					<br />
				</Transition>
				<Transition animation={{ name: "fade", delay: 0.1, applyAt: "whileInView" }}>
					<AnchorHeading>Full-Stack Projects</AnchorHeading>
					<p>
						Excited to showcase my skills to friends and family, I created{" "}
						<Link href="">Chaty - Chat App</Link> with a single room using React, Tailwind, Framer
						Motion, and Firebase. Next, I began working on my dream project, a fully functional{" "}
						<Link href="">Twitter Clone</Link> with user authentication, liking, commenting,
						following, and retweeting features. Users can even edit their profiles. This success
						inspired me to revisit my lost <Link href="">Ecommerce App</Link> project and rebuild it
						as a full-stack application, complete with a cart, user authentication, and an admin
						dashboard for sellers. All of these projects were made possible through the power of
						different BaaS solutions.
					</p>
					<br />
				</Transition>
				<Transition animation={{ name: "fade", delay: 0.1, applyAt: "whileInView" }}>
					<AnchorHeading>Journey into Backend Development</AnchorHeading>
					<p>
						After completing these projects, I felt the urge to build everything from scratch,
						including the backend. I've started learning backend development with Express.js and am
						now diving into MongoDB basics. My next steps are to focus on scalability, security, and
						other advanced backend concepts.
					</p>
					<br />
				</Transition>
				<Transition animation={{ name: "fade", delay: 0.1, applyAt: "whileInView" }}>
					<AnchorHeading>Conclusion</AnchorHeading>
					<p>
						Thanks for reading my story! I'm currently exploring backend development and excited to
						take on new challenges. If you have any opportunities or projects in mind, I'm available
						for full-stack collaborations. Feel free to connect with me on my social media platforms
						below!
					</p>
					<br />
				</Transition>
			</div>
		</section>
	);
}
