import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Nav from "../components/Nav";
import { users } from "../data";

const Dashboared = () => {
  return (
    <div>
      <Nav />
      <div className="h-[40vh] bg-primary flex items-center justify-center">
        <h1 className="text-xl md:text:2xl lg:text-5xl text-white">
          Your clients
        </h1>
      </div>
      <div className="grid grid-cols-1 py-12 md:grid-cols-2 lg:grid-cols-3 w-full px-8 md:px-10 lg:px-16 gap-4">
        {users.map((u) => (
          <Card sx={{ maxWidth: "100%" }}>
            <CardMedia
              sx={{ height: 140 }}
              image={u.image}
              title={u.vehicles[0].model}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {u.fullName}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="large" className="!bg-primary">
                View More
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboared;
