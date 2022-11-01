type ContentfulProps = {
  exps: Collection,
  posts: Collection,
  projs: Collection
}

type Collection = { 
  items: Experience[] | Project[] | Post[]
}

type Experience = {
  company: string,
  duration: string,
  position: string,
  responsibilities: string[],
  skills: string[],
}

type Project = {
  date: string,
  description: string,
  ghUrls: string | null,
  inProgress: boolean,
  liveUrl: string,
  picture: string,
  techStack: string[],
  title: string,
}

type Post = {
  date: string,
  description: string,
  techStack: string | null,
  title: string,
  url: string,
}