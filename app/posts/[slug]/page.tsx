import { getPostBySlug } from "@/lib/posts"
import { formatRevalidate } from "next/dist/server/lib/revalidate"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import MDXContent from '@/components/mdx-content'
import { MDXRemote } from "next-mdx-remote/rsc"
import { formatDate } from "@/lib/utils"
//import NewsletterForm from "@/components/newletter-form"

export default async function Post({params} : {params:{slug:string}} ) {
    const {slug} = params
    const post = await getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const {metadata,content} = post
    const { title , image, author, publishedAt} = metadata

    return (
        <section>
            <div className="">
                <Link
                    href='/posts'
                >
                    <ArrowLeftIcon className='h-5 w-5' />
                    <span>Back to posts</span>
                </Link>

                {
                    image && (
                        <div className="">
                            <Image
                                src={image}
                                alt={title || ''}
                                className='object-cover'
                                fill
                            />
                        </div>
                    )
                }

                <header>
                    <h1>{title}</h1>
                    <p>{author} / {formatDate(publishedAt ?? '')} </p>
                </header>

                <main className="prose dark:prose-invert mt-16">
                    <MDXContent source={content} />
                </main>

                
               
            </div>
        </section>
    )
}