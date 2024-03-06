import { GitHubIcon } from "@/components/icons/GithubIcon";
import { XIcon } from "@/components/icons/XIcon";

export const Name = "CHEN Junqian"

export const Intro = (
    <>
        {`I'm a software engineer, but I prefer to call myself a creator. If you'd like to get in touch,`}{' '}
        <a className="underline hover:cursor-pointer" target="_blank" href="mailto:chenjunqian0810@gmail.com">send me an email.</a>
    </>
)

export const SocialMedia = [
    { name: 'Twitter', link: 'https://twitter.com/JunqianChen', icon: XIcon },
    { name: 'Github', link: 'https://github.com/chenjunqian', icon: GitHubIcon },
];