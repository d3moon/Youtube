import React from 'react'
import {
  makeStyles, 
  AppBar, 
  IconButton, 
  Toolbar,
  Button,
  ListItemIcon,
  Box,
  ListSubheader,
  Grid,
  Typography,
  Hidden,
  Switch,
}  from "@material-ui/core";

import { useTheme } from '@material-ui/core/styles';


import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
 import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import AddCircle from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';

import { alpha } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

import '@fontsource/roboto';
 
const Home = ({darkMode, setDarkMode})=>{ 

  const theme = useTheme();
  const useStyles = makeStyles((theme)=>({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
    flexGrow: 1,

  }, 
  appBar:{
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,

  },
  logo:{
    height: '25px'
  },
   drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none '
  },

  flexGrow: {
    flexGrow: 1 
  },
  icons: {
    paddingRight: theme.spacing(2)
  },

  listItemText: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: 'bold',   
    padding: 2
  }, 
  listItem:{
    paddingTop : 4,
    paddingBottom: 10,
    paddingLeft: 28,
  },
   subheader:{
     textTransform: 'uppercase'
   }, 

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '700px',
    maxWidth: '100%',
    outline: '1px solid #ccc',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: '92%'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

  const videos = [
    {
      id: 1,
      title:
        'Corey Taylor - Snuff (Acoustic)',
      channel: 'Corey Taylor',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 2,
      title:
        'Nihil',
      channel: 'GHOSTMANE',
      views: '957 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb2.png',
    },
    {
      id: 3,
      title:
        'Slipknot: Live at Download Festival 2019',
      channel: 'KNOTFEST',
      views: '106 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb3.png',
    },
    {
      id: 4,
      title:
        'Cannibal Corpse - Violence Unimagined (FULL ALBUM)',
        channel: 'Metal Blade Records',
      views: '5,6 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb4.png',
    },
    {
      id: 5,
       title:
        '1 Hour of Dark Piano Music III | Dark Piano For Dark Writing',
        channel: 'Lucas King',
      views: '2,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb5.png',
    },
    {
      id: 6,
      title: 'My Chemical Romance - I m Not Okay (I Promise) [Dialogue/MTV Version]',
      channel: 'My Chemical Romance',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb6.png',
    },
    {
      id: 7,
       title: 'My Chemical Romance - Welcome to the Black Parade',
      channel: 'My Chemical Romance',
      views: '118 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb7.png',
    },
    {
      id: 8,
      title:
        'Lad does a really good impression of Heath Ledger s Joker | CONTENTbible #Shorts',
      channel: 'CONTENTbible',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb8.png',
    },
  ];
  
  const styledDefault = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

   const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
  return (
   <div className={styledDefault.root}>
    <AppBar  color="inherit" className={styledDefault.appBar}>
    <Toolbar>
      <IconButton edge="start" >
        <MenuIcon />
       </IconButton>
       <img src={
         theme.palette.type === 'dark' 
         ?  '/images/branco.png' 
         : '/images/preto.png'} 
         alt="logo" 
         className={styledDefault.logo} />
       <div  className={styledDefault.flexGrow}/>
        <div className={styledDefault.search}>
            <div className={styledDefault.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: styledDefault.inputRoot,
                input: styledDefault.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
       <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={styledDefault.icons}
          />
        <IconButton className={styledDefault.icons}  > 
          <VideoCallIcon />
        </IconButton>
    
        <IconButton className={styledDefault.icons}   >
          <AppsIcon />
        </IconButton>

        <IconButton className={styledDefault.icons}>
        <NotificationsNoneIcon />
       </IconButton> 

      <Button  startIcon={<AccountCircleIcon />} variant='outlined' color="secondary">Fazer Login</Button>
    </Toolbar>
</AppBar>
    <Box display="flex">
      <Hidden mdDown>
      <Drawer
            className={styledDefault.drawer}
            variant="permanent"
            classes ={{ 
              paper: styledDefault.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={styledDefault.drawerContainer}>

              <List>
                  <ListItem button  classes={{root: styledDefault.listItem}}> 
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText classes={{
                      primary: styledDefault.listItemText
                    }}  primary={"Início"}/>
                  </ListItem>
                  
              
              <ListItem button  classes={{root: styledDefault.listItem}}>
                    <ListItemIcon><ExploreIcon /></ListItemIcon>
                    <ListItemText classes={{
                      primary: styledDefault.listItemText
                    }}  primary={"Explorar"}/>
                  </ListItem>
                  

                  <ListItem button classes={{root: styledDefault.listItem}}>
                    <ListItemIcon><SubscriptionsIcon /></ListItemIcon>
                    <ListItemText classes={{
                      primary: styledDefault.listItemText
                    }}  primary={"Inscrições"}/>
                  </ListItem>
                  
              <Divider />

              </List>

              <List>
                  <ListItem button classes={{root: styledDefault.listItem}}>
                    <ListItemIcon><VideoLibraryIcon /></ListItemIcon>
                    <ListItemText classes={{
                      primary: styledDefault.listItemText
                    }}  primary={"Biblioteca"}/>
                  </ListItem>

                  <ListItem button classes={{root: styledDefault.listItem}}>
                    <ListItemIcon><HistoryIcon /></ListItemIcon>
                    <ListItemText classes={{
                      primary: styledDefault.listItemText
                    }}  primary={"Histórico"}/>
                  </ListItem>
                  

              </List>
              <Divider />
                    <Box p={5}>
                        Faça login para curtir videos, comentar e se inscrever
                      <Box mt={2}>
                              <Button  startIcon={<AccountCircleIcon />}   variant='outlined' color="secondary">Fazer Login</Button>
                    </Box>
                    </Box>
                <Divider />

                    <List
                    component='nav'
                    aria-labelledby='nested-list-subheader'
                    subheader={
                      <ListSubheader
                        component='div'
                        id='nested-list-subheader'
                        className={styledDefault.subheader}
                      >
                        O Melhor do youtube
                      </ListSubheader>
                    }
                  >
                    <ListItem button classes={{ root: styledDefault.listItem }}>
                      <ListItemIcon>
                        <AddCircle />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: styledDefault.listItemText,
                        }}
                        primary={'Música'}
                      />
                    </ListItem>
                    <ListItem button classes={{ root: styledDefault.listItem }}>
                      <ListItemIcon>
                        <AddCircle />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: styledDefault.listItemText,
                        }}
                        primary={'Esportes'}
                      />
                    </ListItem>
                    <ListItem button classes={{ root: styledDefault.listItem }}>
                      <ListItemIcon>
                        <AddCircle />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: styledDefault.listItemText,
                        }}
                        primary={'Jogos'}
                      />
                    </ListItem>
                    <ListItem button classes={{ root: styledDefault.listItem }}>
                      <ListItemIcon>
                        <AddCircle />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: styledDefault.listItemText,
                        }}
                        primary={'Filmes'}
                      />
                    </ListItem>
                    <ListItem button classes={{ root: styledDefault.listItem }}>
                      <ListItemIcon>
                        <AddCircle />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: styledDefault.listItemText,
                        }}
                        primary={'Notícias'}
                      />
                    </ListItem>
                    <ListItem button classes={{ root: styledDefault.listItem }}>
                      <ListItemIcon>
                        <AddCircle />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: styledDefault.listItemText,
                        }}
                        primary={'Ao vivo'}
                      />
                    </ListItem>
                    <ListItem button classes={{ root: styledDefault.listItem }}>
                      <ListItemIcon>
                        <AddCircle />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: styledDefault.listItemText,
                        }}
                        primary={'Destaques'}
                      />
                    </ListItem>
                    <ListItem button classes={{ root: styledDefault.listItem }}>
                      <ListItemIcon>
                        <AddCircle />
                      </ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: styledDefault.listItemText,
                        }}
                        primary={'Videos 360'}
                      />
                    </ListItem>
                  </List>
                  <Divider />
                  <ListItem button classes={{ root: styledDefault.listItem }}>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: styledDefault.listItemText,
                      }}
                      primary={'Procurar mais'}
                    />
                  </ListItem>
                  <Divider />

              <List>
                  <ListItem button classes={{root: styledDefault.listItem}}>
                    <ListItemIcon><VideoLibraryIcon /></ListItemIcon>
                    <ListItemText classes={{
                      primary: styledDefault.listItemText
                    }}  primary={"Youtube Premium"}/>
                  </ListItem>

                  <ListItem button classes={{root: styledDefault.listItem}}>
                    <ListItemIcon><HistoryIcon /></ListItemIcon>
                    <ListItemText classes={{
                      primary: styledDefault.listItemText
                    }}  primary={"Ao vivo"}/>
                  </ListItem>
                  

              </List>
            </div>
          </Drawer>
          </Hidden>
   <Box p={8}>
    <Toolbar/>
      <Typography
                  variant='h5'
                  color='textPrimary'
                  style={{ fontWeight: 600 }}
                >
                  Recomendados
      </Typography>   

      <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item spacing={4} lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>   
            </Box> 
    </Box> 
    
   </div>
  )
}

export default Home