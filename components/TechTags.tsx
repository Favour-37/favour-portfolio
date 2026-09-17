export default function TechTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-[11px] font-mono uppercase tracking-wider text-gray-500 border border-white/10 rounded-full px-3 py-1"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}