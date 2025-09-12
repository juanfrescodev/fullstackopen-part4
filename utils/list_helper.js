const _ = require('lodash')

const blog = require("../models/blog")

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) =>{
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) =>{
  const favorito = Math.max(...blogs.map(b => b.likes))
  const blogFavorito = blogs.find(b=>b.likes===favorito)
  return {
    title: blogFavorito.title,
    author: blogFavorito.author,
    likes: blogFavorito.likes
  }
}

const mostBlogs = (blogs) =>{
  const bloguero = _.groupBy(blogs, 'author')
  const pairs = _.toPairs(bloguero)
  const top = _.maxBy(pairs, pair => pair[1].length)
  return {
    author: top[0],
    blogs: top[1].length
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}