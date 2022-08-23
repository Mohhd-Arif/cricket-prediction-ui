import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardTravelSharp } from '@material-ui/icons';
const CardComponent = () => {
    var cards = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return(
        <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', overflowY: 'scroll', height: '92vh' }}>
        {
            cards.map(ele => (

                <Card sx={{ maxWidth: 345, margin: "10px" }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500],position:"inherit" }} aria-label="recipe">
                                AK
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        // image={require("../assets/cricket-player.png")}
                        image="https://source.unsplash.com/1600x900/?sports"
                        alt="i won 10,000 rs"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>10 likes
                        {/* <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton> */}
                    </CardActions>
                </Card>
            ))

        }
    </div>
    )
}

export default CardComponent;