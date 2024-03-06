import { Container } from "./Container";
import { PageTitle } from "./PageTitle";

interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    intro: string | React.ReactNode;
}

export default function PageLayout({ title, intro, children }: React.PropsWithChildren<PageLayoutProps>) {
    return (
        <Container className="mt-9">
            <header className="w-full mt-9">
                <div className="w-full flex justify-start ">
                    <PageTitle>{title}</PageTitle>
                </div>
                <div className="mt-6 text-base text-balance">{intro}</div>
            </header>
            {children}
        </Container>
    );
}