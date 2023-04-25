// import { highQualityTechnicalArticles } from "./sidebar/high-quality-technical-articles";
// import { aboutTheAuthor } from "./sidebar/about-the-author";
// import { books } from "./sidebar/books";
// import { ai } from "./sidebar/ai";
// import { learningPath } from "./sidebar/learning-path";
// import { openSourceProject } from "./sidebar/open-source-project";
// import { learnNote } from "./sidebar/learn-note";
// import {essay} from "./sidebar/essay";

// @ts-ignore
export const sidebarConfig =

    {

        "/docs/learn-note/": [
            {
                text: "view",
                children: [
                    "",
                    {
                        text: "JVM",
                        link: "JVM/README.md"
                    }
                ],
            }

        ],

      "/docs/theme-reco/": [
          /* 一个小目录*/
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    }





