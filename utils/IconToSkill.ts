import { IconType } from "react-icons"
import { SiBootstrap, SiBulma, SiContentful, SiDjango, SiExpress, SiFirebase, SiFlask, SiGo, SiGraphql, SiHeroku, SiJava, SiJavascript, SiJquery, SiMicrosoftexcel, SiMicrosoftword, SiMongodb, SiNextdotjs, SiNodedotjs, SiOpenapiinitiative, SiPostgresql, SiPython, SiReact, SiRust, SiTailwindcss, SiTwilio } from "react-icons/si"
import { BiNotepad } from "react-icons/bi"

type skillConverter = {
  [name: string]: IconType
}

export const skills: skillConverter = {
  "javascript": SiJavascript,
  "react": SiReact,
  "next.js": SiNextdotjs,
  "graphql": SiGraphql,
  "contentful": SiContentful,
  "tailwindcss": SiTailwindcss,
  "firebase": SiFirebase,
  "jquery": SiJquery,
  "python": SiPython,
  "django": SiDjango,
  "postgresql": SiPostgresql,
  "heroku": SiHeroku,
  "mongodb": SiMongodb,
  "bulma": SiBulma,
  "express": SiExpress,
  "bootstrap": SiBootstrap,
  "solidjs": SiReact,
  "node.js": SiNodedotjs,
  "twilio": SiTwilio,
  "rust": SiRust,
  "openapi": SiOpenapiinitiative,
  "go": SiGo,
  "java": SiJava,
  "flask": SiFlask,
  "microsoftword": SiMicrosoftword,
  "microsoftexcel": SiMicrosoftexcel,
  "technicalwriting": BiNotepad
}