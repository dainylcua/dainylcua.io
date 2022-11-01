export type ContentfulProps = {
  exps: Collection,
  posts: Collection,
  projs: Collection
}

export type Collection = { 
  [collectionName: string]: {
    items: Experience[] | Project[] | Post[]
  }
}

export type Experience = {
  company: string,
  duration: string,
  position: string,
  responsibilities: string[],
  skills: string[],
}

export type Project = {
  date: string,
  description: string,
  ghUrls: string | null,
  inProgress: boolean,
  liveUrl: string,
  picture: string,
  techStack: string[],
  title: string,
}

export type Post = {
  date: string,
  description: string,
  techStack: string | null,
  title: string,
  url: string,
}