import path from "path";
import fs from 'fs'
import matter from "gray-matter";
import { metadata } from "@/app/layout";
import { PossibleStaticMetadataFileNameConvention } from "next/dist/build/webpack/loaders/metadata/types";

const rootDirectory = path.join(process.cwd(), 'content', 'posts')

export type Post = {
    metadata: PostMetadata,
    content: string
}

export type PostMetadata = {
        title?: string
        summary?: string
        image?: string
        author?: string
        publishedAt?: string
        slug: string
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        const filePath = path.join(rootDirectory, `${slug}.mdx`)
        const fileContent = fs.readFileSync(filePath,{ encoding: 'utf8' })
        const {data , content}  = matter(fileContent)
        return { metadata: { ...data, slug}, content}
    } catch (error) {
        return null
    }
}
