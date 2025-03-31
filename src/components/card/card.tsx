export default function Card({ title, description } : { title: string; description: string }) {
  return(
    <article className="font-inter w-56 h-44 flex flex-col items-center text-center lg:text-start lg:items-start gap-6">
      <h2 className="text-text-headings font-black text-lg">{title}</h2>
      <p className="text-text-typography font-extralight text-xs">{description}</p>
    </article>
  );
}