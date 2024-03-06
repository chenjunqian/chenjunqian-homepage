import PageLayout from "@/components/PageLayout";
import { PreviewPostCardWrapper } from "@/components/PostCard";
import { SocialLink } from "@/components/SocailLink";
import { Intro, Name, SocialMedia } from "@/data/home";

export default function Home() {

	return (
		<PageLayout title={Name} intro={Intro} >
			<div className="w-full flex justify-start mt-9">
				{SocialMedia.map((socialProfile) => (
					<SocialLink
						className="mr-4"
						key={socialProfile.name}
						aria-label={`Follow on ${socialProfile.name}`}
						href={socialProfile.link}
						icon={socialProfile.icon}
					/>
				))}
			</div>
			<div className="w-full mt-16">
				<PreviewPostCardWrapper link="/blog/first-blog" title="First Blog" description="First Blog Description" decorate date={"Febraury 16, 2024"} >
				</PreviewPostCardWrapper>
			</div>
		</PageLayout>
	)
}
