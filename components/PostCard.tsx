import clsx from "clsx";
import Link from "next/link";


const PreviewPostCardInner = ({ title, description, className, children }: React.PropsWithChildren<{ title: string; description: string, className?: string }>) => {

    return (
        <div className={clsx("w-full max-w-xl", className)}>
            <div className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 text-balance">{title}</div>
            <div className="relative mt-4 text-sm">{description}</div>
            <div aria-hidden="true" className="relative mt-4 flex items-center text-sm font-medium text-primary">
                Read more
                <span className="ml-1">→</span>
            </div>
        </div>
    )
}

export const ANIMATION_FROM_PROPS = { opacity: 0 };

export const ANIMATION_TO_PROPS = {
    opacity: 1,
    transition: { delay: 0.1, duration: 0.25, ease: 'easeOut' },
} as const;

export const PreviewPostCardWrapper = ({ link, title, description, date, decorate, children }: React.PropsWithChildren<{ link: string; title: string; description: string, date: string, decorate?: boolean }>) => {

    return (
        <div className="w-full relative max-w-xl m-6 group">
            <span className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
            <Link href={link}>
                <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                <span className="relative z-10">
                    <time className={clsx(
                        'relative order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
                        decorate && 'pl-3.5',
                    )}>
                        <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                        </span>
                        {date}
                    </time>
                    <PreviewPostCardInner title={title} description={description} className="mt-4">
                        {children}
                    </PreviewPostCardInner>
                </span>
            </Link>
        </div>
    )
}