export type ContentfulProps = {
  exps: Collection<ExperienceType>,
  posts: Collection<Post>,
  projs: Collection<Project>,
}

export type Collection<T> = { 
  [collectionName: string]: {
    items: T[]
  }
}

export type ExperienceType = {
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