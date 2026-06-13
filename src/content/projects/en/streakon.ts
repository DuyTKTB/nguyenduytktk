import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Full Video",
theme: "dark",
tags: ["capcut", "cinematic", "shorts", "editing"],
videoBorder: false,
live: "https://drive.google.com/drive/folders/12dQzwYAWYsSr9sdESgtBj5CeMYqKpUjM",
description:
"Professional full video editing projects focused on cinematic storytelling, dynamic subtitles, smooth transitions, and engaging pacing.<br/><br/>Edited for TikTok, Reels, Shorts, and social media branding with a strong focus on audience retention and modern visual style.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "Solo and group streaks",
        caption: "Đây là 2 trang FB",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Streak progress",
        caption: "Đây là thư mục file",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "Cheer for friends",
        caption: "By nguyenduytk",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "Invite Flow",
        caption: "LINK",
      },
    },
  ],
} as const satisfies ProjectContent;
