import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!",
    },
  ];
};

export default function Index() {
  return (
    <div className="font-serif p-4 w-full bg-gray-100 h-screen text-gray-800">
      <div className="max-w-[1024px] m-auto p-20 ">
        <h1 className="text-3xl font-semibold">Designs for Ghost.org templates</h1>
        <h2 className='py-6 text-lg'>We create delightful designs for the Ghost ecosystem. Get in touch here.</h2>
        <div className="mt-12 grid gap-6 grid-cols-3 ">
          <div className="w-40 h-40 bg-red-400"></div>
          <div className="w-40 h-40 bg-red-400"></div>
          <div className="w-40 h-40 bg-red-400"></div>
          <div className="w-40 h-40 bg-red-400"></div>
          <div className="w-40 h-40 bg-red-400"></div>
          <div className="w-40 h-40 bg-red-400"></div>
          </div>
      </div>
    </div>
  );
}
