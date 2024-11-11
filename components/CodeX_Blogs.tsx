import { Avatar, Box, Card, CardContent, Container, Typography, Chip, Link } from '@mui/material';
import Grid  from '@mui/material/Grid2';
import { FC } from 'react';
import PersonIcon from '@mui/icons-material/Person';

interface Post {
  id: number;
  title: string;
  description: string;
  link ?: string;
  date: string;
  category: string;
  author: {
    name: string;
    role: string;
    imageIcon?: JSX.Element;
  };
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Topic1', // Title of the blog
    description: // Description of the blog
      'details of the topic will be added here as long as the description is not too long.',
    link : 'https://www.google.com',
    date: 'Mar 16, 2020', // Date of the blog
    category: 'Marketing', // Category of the blog
    author: { // Author of the blog, name and role
      name: 'Name 1',
      role: 'Co-Founder / CTO',
      imageIcon: <PersonIcon />,
    },
  },
  
  {
    id: 2,
    title: 'Topic2',
    description:
      'details of the topic will be added here as long as the description is not too long.',
    link : 'https://www.google.com',
    date: 'Mar 16, 2020',
    category: 'Case Study',
    author: {
      name: 'Name 2',
      role: 'Co-Founder / CTO',
      imageIcon: <PersonIcon />,
    },
  },

  {
    id: 3,
    title: 'Topic3',
    description:
      'details of the topic will be added here as long as the description is not too long.',
    link : 'https://www.google.com',
    date: 'Mar 16, 2020',
    category: 'Marketing',
    author: {
      name: 'Name 3',
      role: 'Co-Founder / CTO',
      imageIcon: <PersonIcon />,
    },
  },
  {
    id: 4,
    title: 'Topic4',
    description:
      'details of the topic will be added here as long as the description is not too long.',
    link : 'https://www.google.com',
    date: 'Mar 16, 2020',
    category: 'Marketing',
    author: {
      name: 'Name 4',
      role: 'Co-Founder / CTO',
      imageIcon: <PersonIcon />,
    },
  },
  // Add more posts here
];

const Blog: FC = () => {
  return (
    <Box sx={{py: 8 }}>
      <Container maxWidth="lg">

        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          sx={{ 
            marginTop: 6, 
            fontSize: { xs: '2.5rem', md: '3.5rem' }, 
            fontWeight: 600, 
            borderBottom: '2px solid', 
            borderColor: 'primary.secondary', 
            display: 'inline-block' 
          }}
        >
          From the blog
        </Typography>

        <Typography 
          variant="h6" 
          color="#fff" 
          sx={{ 
            mb: 6, 
            fontSize: { xs: '1.2rem', md: '1.5rem' }, 
            fontWeight: 400  
          }}
        >
          Read the latest stories from our blog
        </Typography>

        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: 2, boxShadow: 2, transition: '0.3s', '&:hover': { boxShadow: 5 }, backgroundColor: '#f9f9f9' }}>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    
                    <Typography variant="body2" color="text.secondary">
                      {post.date}
                    </Typography>

                    <Chip label={post.category} variant="outlined" size="small" />
                  
                  </Box>

                  <Typography gutterBottom variant="h6" component="h3">
                    {post.title}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.description}
                  </Typography>

                  <Link href={post.link} color="primary" underline="hover">
                    Read more
                  </Link>
                
                </CardContent>

                <Box display="flex" alignItems="center" p={2}>
                  <Avatar alt={post.author.name}>{post.author.imageIcon}</Avatar>
                  <Box ml={2}>
                    <Typography variant="subtitle2">{post.author.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.author.role}
                    </Typography>
                  </Box>
                </Box>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
