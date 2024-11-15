import { Card, CardMedia, CardActionArea} from '@mui/material';
import { useState } from 'react';

export interface ICarteProps {
  numeroChat: number;
}

const Carte = (props: ICarteProps) => {
    //Variable qui définit si la carte doit montré l'image de chat ou le dessus de la carte
    const [retourne, setRetourne] = useState(false)
    
    let imageBase = "../public/dessus-carte.svg"
    let cheminImage ="../public/chat"+ props.numeroChat + ".png"
    return (
        <Card sx={{ maxWidth: 150 }}>
            <CardActionArea onClick={() => setRetourne(true)}>
            {retourne ?(
                <CardMedia
                component="img"
                sx={{width:150}}
                image={cheminImage}   
            />
            ): (<CardMedia
                component="img"
                sx={{width:150}}
                image={imageBase}   
            />)}
            </CardActionArea>

        </Card>
    );
};

export default Carte;