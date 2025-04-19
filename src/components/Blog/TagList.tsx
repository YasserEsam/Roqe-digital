// components/Blog/TagList.tsx
"use client";
import TagButton from "./TagButton";

interface TagListProps {
  tags: string[];
}

export default function TagList({ tags }: TagListProps) {
  return (
    <div className="mb-5">
      <h4 className="text-body-color mb-3 text-sm font-medium">
        الوسوم الشائعة:
      </h4>
      <div className="flex items-center">
        {tags.map((tag, index) => (
          <TagButton key={index} text={tag} />
        ))}
      </div>
    </div>
  );
}
