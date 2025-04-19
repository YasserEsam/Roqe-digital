// components/Blog/ShareSection.tsx
import SharePost from "./SharePost";

export default function ShareSection() {
  return (
    <div className="mb-5">
      <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
        مشاركة هذا المقال:
      </h5>
      <div className="flex items-center sm:justify-end">
        <SharePost />
      </div>
    </div>
  );
}
