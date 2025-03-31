export default function Card({ title, description }: { title: string; description: string }) {
  return (
    <article className="font-inter w-full min-w-[220px] max-w-xs h-auto p-6 flex flex-col items-center text-center lg:text-start lg:items-start gap-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-text-headings font-extrabold text-lg lg:text-xl">{title}</h2>
      <p className="text-text-typography font-light text-xs lg:text-sm">{description}</p>
    </article>
  );
}