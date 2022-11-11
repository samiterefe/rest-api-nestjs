import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { Blog } from './blog.model';
import { title } from 'process';
import { createBlogDto } from './dto/create-blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get()
  getAllBlogs(): Blog[] {
    return this.blogsService.getAllBlogs();
  }

  @Post()
  createBlog(@Body() createBlogDto: createBlogDto): Blog {
    return this.blogsService.createBlog(createBlogDto);
  }
}
