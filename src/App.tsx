import { useEffect, useState } from 'react';
import './App.css';
import Carte from './components/carte'
import { Grid } from '@mui/material';

function App() {
  const [nbCoup, setNbCoup] = useState(20)
  const [lesImagesMelanger, setLesImagesMelanger] = useState<number[]>([])
  const [pret, setPret] = useState(false)
  const [essaiConsecutif, setEssaiConsecutif] = useState(0)


  useEffect(() => {
    Melanger()
  }, []);

  //Fonction qui s'assure que les cartes ne sont pas positionnées au même endroit à chaque partie.
  function Melanger(){
    let melanger: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let i = 0
    while(i < melanger.length){
      let aleatoire = Math.floor((Math.random() * 8) +1)
      melanger[i] = aleatoire
      let nbFois = 0
      for(let j = 0; j < melanger.length; j++){
        if(melanger[j] == aleatoire){
          nbFois++
        }
      }
      if(nbFois <= 2){
        i++
      }
    }

    setLesImagesMelanger(melanger)
    setPret(true)
  }

  function Essai(){
    setEssaiConsecutif((essaiConsecutif) => essaiConsecutif +1)
    if(essaiConsecutif >= 1){
      setNbCoup((nbCoup) => nbCoup -1)
      setEssaiConsecutif(0)
    }
  }

  return (
    <>
      <h1>Jeu de mémoire</h1>
      <h3>Nombre de coup restant: {nbCoup}</h3>
        {pret ?(
          <Grid container spacing={2} columns={4}>
        <Grid container item spacing={2} columns={4}>

          <Grid item xs={1}>
            <div onClick={() => Essai()}>
              <Carte numeroChat={lesImagesMelanger[0]}></Carte>
            </div>
          </Grid>

          <Grid item xs={1}>
            <div onClick={() => Essai()}>
              <Carte  numeroChat={lesImagesMelanger[1]}></Carte>
            </div>
          </Grid>

          <Grid item xs={1}>
            <div onClick={() => Essai()}>
              <Carte  numeroChat={lesImagesMelanger[2]}></Carte>
            </div>
          </Grid>

          <Grid item xs={1}>
            <div onClick={() => Essai()}>
              <Carte numeroChat={lesImagesMelanger[3]}></Carte>
            </div>
          </Grid>
        </Grid>
        
        <Grid container item spacing={2} columns={4}>
          <Grid item xs={1}>
          <div onClick={() => Essai()}>
              <Carte numeroChat={lesImagesMelanger[4]}></Carte>
            </div>
          </Grid>
          <Grid item xs={1}>
          <div onClick={() => Essai()}>
              <Carte numeroChat={lesImagesMelanger[5]}></Carte>
            </div>
          </Grid>
          <Grid item xs={1}>
          <div onClick={() => Essai()}>
              <Carte numeroChat={lesImagesMelanger[6]}></Carte>
            </div>
          </Grid>
          <Grid item xs={1}>
          <div onClick={() => Essai()}>
              <Carte numeroChat={lesImagesMelanger[7]}></Carte>
            </div>
          </Grid>
        </Grid>
        <Grid container item spacing={2} columns={4}>
          <Grid item xs={1}>
          <div onClick={() => Essai()}>
              <Carte numeroChat={lesImagesMelanger[8]}></Carte>
            </div>
          </Grid>
          <Grid item xs={1}>
          <div onClick={() => Essai()}>
              <Carte numeroChat={lesImagesMelanger[9]}></Carte>
            </div>
          </Grid>
          <Grid item xs={1}>
          <div onClick={() => Essai()}>
              <Carte numeroChat={lesImagesMelanger[10]}></Carte>
            </div>
          </Grid>
          <Grid item xs={1}>
          <div onClick={() => Essai()}>
              <Carte numeroChat={lesImagesMelanger[11]}></Carte>
            </div>
          </Grid>
        </Grid>
        <Grid container item spacing={2} columns={4}>
          <Grid item xs={1}>
          <div onClick={() => Essai()}>
              <Carte numeroChat={lesImagesMelanger[12]}></Carte>
            </div>
          </Grid>
          <Grid item xs={1}>
          <div onClick={() => Essai()}>
              <Carte numeroChat={lesImagesMelanger[13]}></Carte>
            </div>
          </Grid>
          <Grid item xs={1}>
          <div onClick={() => Essai()}>
              <Carte numeroChat={lesImagesMelanger[14]}></Carte>
            </div>
          </Grid>
          <Grid item xs={1}>
          <div onClick={() => Essai()}>
              <Carte numeroChat={lesImagesMelanger[15]}></Carte>
            </div>
          </Grid>
        </Grid>
      </Grid>
        ): (<></>)}    
      
    </>
  );
}

export default App;
