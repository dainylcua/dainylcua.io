import { IconType } from "react-icons"
import { SiBootstrap, SiBulma, SiContentful, SiDjango, SiExpress, SiFirebase, SiGraphql, SiHeroku, SiJavascript, SiJquery, SiMongodb, SiNextdotjs, SiPostgresql, SiPython, SiReact, SiTailwindcss } from "react-icons/si"

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
  "bootstrap": SiBootstrap
}