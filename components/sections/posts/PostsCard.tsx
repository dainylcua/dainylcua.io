import { Post } from "../../../types/types"
import { skills } from "../../../utils/IconToSkill"
import { SiJavascript, SiNodedotjs, SiTwilio, SiRust, SiOpenapiinitiative, SiReact, SiExpress } from "react-icons/si"
import { IconContext } from "react-icons/lib"
import React from "react"

type Props = {
  post: Post
}

export default function PostsCard(props: Props) {
  const { post } = props
  return(
    <a 
      href={post.url}
      rel="noopener noreferrer" 
      target="_blank" 
      className="w-80 h-80 p-4 flex flex-col rounded-md transition-all bg-size-200 bg-stone-100 ease-out duration-400 shadow-md hover:shadow-inner hover:scale-95 hover:shadow-orange-700/25 col-span-1 row-span-1 text-stone-900 relative cursor-pointer"
    >
      <h3 className="text-xl font-bold">
        { post.title }
      </h3>
      <p className="text-lg font-semibold mb-4">
        { (new Date(post.date)).toLocaleDateString('en-US') }
      </p>
      <p>
        { post.description }
      </p>
      <div className="absolute bottom-2 right-2 flex gap-x-1">
        <IconContext.Provider 
          value={{ 
          size: "1.5em", 
          className: "w-fit opacity-60"
          }}
        >
          {
          post.techStack ? 
            post.techStack.map((tech) => (
              <div key={`${post.title}-${tech}`}>
                {
                  React.createElement(
                    skills[tech.toLowerCase().replace(/\s/g,'')]
                  )
                }
              </div>
            ))
          :
            ``
          }
        </IconContext.Provider>
      </div>
    </a>
  )
}