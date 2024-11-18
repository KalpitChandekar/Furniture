import Image from "next/image";

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto mb-40 px-4 space-y-8">
      <div className="flex justify-between">
        <h1 className="text-black text-3xl font-semibold">Recent Blog</h1>
        <p className="text-black text-lg font-semibold underline">
          View All Posts
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        <div className="">
          <Image
            src="/blog-1.png"
            alt="blog1"
            width={1440}
            height={990}
            className="max-w-sm w-full mb-8"
          />
          <h1 className="text-black text-xl font-semibold">
            First Time Home Owner Ideas{" "}
          </h1>
          <p className="text-black text-sm font-semibold">
            <span className="italic font-light">by</span> Nana Ama{" "}
            <span className="italic font-light">on</span> Nov 18th, 2021
          </p>
        </div>
        <div className="">
          <Image
            src="/blog-2.png"
            alt="blog1"
            width={1440}
            height={990}
            className="max-w-sm w-full mb-8"
          />
          <h1 className="text-black text-xl font-semibold">
            First Time Home Owner Ideas{" "}
          </h1>
          <p className="text-black text-sm font-semibold">
            <span className="italic font-light">by</span> Nana Ama{" "}
            <span className="italic font-light">on</span> Nov 18th, 2021
          </p>
        </div>
        <div className="">
          <Image
            src="/blog-3.png"
            alt="blog1"
            width={1440}
            height={990}
            className="max-w-sm w-full mb-8"
          />
          <h1 className="text-black text-xl font-semibold">
            First Time Home Owner Ideas{" "}
          </h1>
          <p className="text-black text-sm font-semibold">
            <span className="italic font-light">by</span> Nana Ama{" "}
            <span className="italic font-light">on</span> Nov 18th, 2021
          </p>
        </div>
      </div>
    </div>
  );
};
export default Blog;
