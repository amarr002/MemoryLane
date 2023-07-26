import { makeStyles } from "@material-ui/core/Styles";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 20,
        margin: '30px 0',
        padding: '0 40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
      },
      heading: {
        // color: 'rgba(0,183,255, 1)',
        color: 'rgb(101, 123, 248)',
      },
      image: {
        marginLeft: '15px',
        // borderRadius: 20,
      },
      [theme.breakpoints.down('sm')]:{
        mainContainer: {
          flexDirection: "column-reverse",
        }
      }
     
}));