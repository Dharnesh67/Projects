import Image from "next/image";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="bg-white">
      <div className="container mx-auto p-4 bg-blue-400">
        <h1 className="text-3xl font-bold">Hello World</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis sit amet odio
          ultricies tincidunt. Nam euismod, nunc nec aliquam bibendum, odio libero fermentum ex, at
          luctus mi dolor sit amet libero. Sed lacinia, ex nec ultricies ultricies, justo mauris
          fermentum erat, nec suscipit ligula justo nec odio. Ut nec odio nec libero fermentum
          tincidunt. Nullam nec blandit ex. Donec auctor, mi nec ultricies ultricies, eros nulla
          pellentesque neque, a lacinia erat purus nec libero. Nullam nec libero nec libero
          fermentum tincidunt. Donec auctor, mi nec ultricies ultricies, eros nulla pellentesque
          neque, a lacinia erat purus nec libero.
        </p>
        <Image src="/image.jpg" width={300} height={200} alt="Image" />
      </div>
      <Button>Button</Button>

    </div>
  );
}
