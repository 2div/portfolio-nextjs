import Intro from "@/components/intro";
import { Button } from "@/components/ui/button";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";


export default function Home() {

  
  return (
    <section className="py-24">
      <div className="container max-w-3xl"> 
        <Intro />
        
      </div>
    </section>
  );
}
