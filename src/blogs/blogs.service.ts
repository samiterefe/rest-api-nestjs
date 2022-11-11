import { Injectable } from '@nestjs/common';
import { Blog, BlogStatus } from './blog.model';
import * as uuid from 'uuid';
import { randomUUID } from 'crypto';
import { createBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogsService {
  private blogs: Blog[] = [];

  getAllBlogs(): Blog[] {
    return this.blogs;
  }

  createBlog(createBlogDto: createBlogDto) {
    const { title, description, postedBy, category } = createBlogDto;
    const randomId = Math.random().toString();
    const blog: Blog = {
      id: randomId,
      title,
      description,
      category,
      postedBy,
      status: BlogStatus.IN_PROGRESS,
    };
    this.blogs.push(blog);
    return blog;
  }
}
