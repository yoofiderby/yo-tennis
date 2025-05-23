export const portfolioCategoriesQuery = `
*[_type == "portfolioCategory"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
}
`; 