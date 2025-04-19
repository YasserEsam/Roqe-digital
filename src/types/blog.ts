// src/types/blog.ts

type Author = {
  name: string;        // Author's full name
  image: string;       // Path to author's profile image
  designation: string; // Author's job title or role
};

export type Blog = {
  id: number;          // Unique identifier for the blog post
  title: string;       // Blog post title
  paragraph: string;   // Short summary/description
  image: string;       // Path to main blog image
  author: Author;      // Author information
  tags: string[];      // Array of tags/categories
  publishDate: string; // Publication date (formatted string)
  
  // New fields we added:
  content: string;     // HTML formatted full content of the blog
  stats: {             // Engagement statistics
    views: number;     // Number of views
    comments: number;  // Number of comments
    shares: number;    // Number of social shares
  };

  quote: string;
  
  // Optional fields you might want to add later:
  /*
  readingTime?: number;    // Estimated reading time in minutes
  featured?: boolean;      // Whether post is featured
  relatedPosts?: number[]; // IDs of related posts
  seoKeywords?: string[];  // SEO keywords
  */
};