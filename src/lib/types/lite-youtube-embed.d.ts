declare module "lite-youtube-embed";
declare module "lite-youtube-embed/src/lite-yt-embed.css";

declare namespace svelteHTML {
    interface IntrinsicElements {
        "lite-youtube": {
            videoid: string;
            title?: string;
            class?: string;
        };
    }
}
