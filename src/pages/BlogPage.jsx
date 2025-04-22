import { Box, Typography } from '@mui/material';

const blogs = [
  {
    title: 'Master Shipping Route Optimization',
    date: 'January 10, 2025',
    description:
      'Take control of your logistics! Learn actionable strategies to optimize routes and boost efficiency.',
    image: '/blog1.jpg',
    link: '#',
  },
  {
    title: ' AI and Automation: The Next Era of Logistics',
    date: 'March 25, 2025',
    description:
      'Explore the transformative power of artificial intelligence and automation in shaping the future of supply chains.',
    image: '/blog2.jpg',
    link: '#',
  },
];

export default function BlogSection() {
  return (
    <Box sx={{ backgroundColor: '#f9fafb', py: 8 }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Blogs
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
            mt: 4,
          }}
        >
          {blogs.map((blog, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: '#fff',
                borderRadius: 3,
                boxShadow: 2,
                overflow: 'hidden',
                textAlign: 'left',
                transition: 'box-shadow 0.3s',
                '&:hover': { boxShadow: 6 },
              }}
            >
              <Box
                component="img"
                src={blog.image}
                alt={blog.title}
                sx={{ width: '100%', height: 250, objectFit: 'cover' }}
              />
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight="600" gutterBottom>
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.date}
                </Typography>
                <Typography sx={{ mt: 1 }} variant="body1">
                  {blog.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
