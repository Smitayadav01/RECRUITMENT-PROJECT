import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Award, BookOpen, Users, Search, X } from 'lucide-react';

const staticPosts = [
  {
    id: 1,
    title: "Success Story: Transforming Careers",
    excerpt: "How we helped professionals achieve their dream jobs",
    content: "Our commitment to excellence has helped numerous professionals find their ideal career paths. Through personalized guidance and industry expertise, we've successfully placed candidates in leading organizations across various sectors. Our approach focuses on understanding both the candidate's aspirations and the employer's requirements, ensuring perfect matches that lead to long-term success.",
    author: "Jatin Gala",
    image_url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    category: "Success Stories",
    created_at: "2025-04-15T10:00:00Z"
  },
  {
    id: 2,
    title: "Career Guidance: Navigating Your Professional Journey",
    excerpt: "Expert tips for career growth and development",
    content: "In today's competitive job market, having the right guidance can make all the difference. Our career experts provide valuable insights on resume building, interview preparation, and professional development. We help you identify your strengths, improve your skills, and present yourself effectively to potential employers. Learn how to stand out in your industry and take your career to the next level.",
    author: "Career Expert Team",
    image_url: "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg",
    category: "Career Guidance",
    created_at: "2025-04-14T09:00:00Z"
  },
  {
    id: 3,
    title: "Company Achievement: Excellence in Recruitment",
    excerpt: "Celebrating our milestone of successful placements",
    content: "We are proud to announce that Arihant Consultants has achieved a remarkable milestone in recruitment excellence. Our dedicated team has successfully placed over 1000 professionals in their dream roles this year. This achievement reflects our commitment to quality service and our deep understanding of both client and candidate needs. We continue to strive for excellence in every placement we make.",
    author: "Arihant Team",
    image_url: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    category: "Company Achievements",
    created_at: "2025-04-13T08:00:00Z"
  }
];

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = staticPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedPosts = filteredPosts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = [];
    }
    acc[post.category].push(post);
    return acc;
  }, {});

  if (selectedPost) {
    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-8 flex items-center text-gray-600 hover:text-purple-900"
          >
            <X className="h-6 w-6 mr-2" />
            Back to Blog
          </button>
          
          <img
            src={selectedPost.image_url}
            alt={selectedPost.title}
            className="w-full h-64 object-cover rounded-xl mb-8"
          />
          
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <User className="h-4 w-4 mr-2" />
            <span>{selectedPost.author}</span>
            <Calendar className="h-4 w-4 ml-4 mr-2" />
            <span>{new Date(selectedPost.created_at).toLocaleDateString()}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{selectedPost.title}</h1>
          <div className="prose max-w-none">
            {selectedPost.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="blog" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Our Blog</h2>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {Object.entries(groupedPosts).map(([category, categoryPosts]) => (
          <div key={category} className="mb-16">
            <div className="flex flex-col items-center text-center mb-12">
              {category === 'Success Stories' && <Award className="h-12 w-12 text-purple-900" />}
              {category === 'Career Guidance' && <BookOpen className="h-12 w-12 text-purple-900" />}
              {category === 'Company Achievements' && <Users className="h-12 w-12 text-purple-900" />}
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900">{category}</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
              {categoryPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={post.image_url} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:w-2/3">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <User className="h-4 w-4 mr-2" />
                        <span>{post.author}</span>
                        <Calendar className="h-4 w-4 ml-4 mr-2" />
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {post.excerpt}
                      </p>
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="inline-flex items-center text-purple-900 hover:text-purple-700 font-medium"
                      >
                        Read Full Story
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;