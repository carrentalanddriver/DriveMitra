import Image from 'next/image';

export default function ServicePageTemplate({ title, image, description }: { title: string, image: string, description: string }) {
  return (
    <main className="flex flex-col items-center w-full min-h-[70vh] py-10 px-4">
      <div className="max-w-3xl w-full bg-gradient-to-br from-slate-900/80 to-slate-800/60 rounded-2xl shadow-lg p-8 flex flex-col items-center glass-bg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent text-center drop-shadow-lg">{title}</h1>
        <div className="w-full flex justify-center mb-6">
          <Image src={image} alt={title} width={320} height={220} className="rounded-xl shadow-glass object-cover" />
        </div>
        <p className="text-lg text-slate-200 text-center mb-4">{description}</p>
        {/* Future functionalities can be added here */}
      </div>
    </main>
  );
}
