import React, { Component } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const styles = (theme => ({
	root: {
		maxWidth: 345,
	  },
	  media: {
		height:200
	  },
  }));

class EmployeeList extends Component{

    constructor(){
				super();
				this.state ={
						empList: []
				}
				// DON'T DO AJAX CALLS HERE 
				
    }

		componentWillMount(){
			console.log("inside Component Will Mount");
		}

		componentDidMount(){
			console.log("Inside Component Did Mount");
			// send ajax calls  
			axios.get('http://localhost:1337/profiles' && 'http://localhost:1337/upload/files')  //INSTEAD OF THIS URL GIVE YOUR URL HERE
				.then( (response) => {
					// handle success
					console.log(response);
					this.setState({
						empList: response.data
					});
				})
				.catch( (error) => {
					// handle error
					console.log(error);
				})
				.finally( () => {
					// always executed
                });
                
		}

    render(){
		
			let employees = null; 
			if(this.state.empList && this.state.empList.length > 0) {
				employees = this.state.empList.map( (employee) =>{ //FOLLOW THE JSON STRUCTURE OF THE UR JSON OBJECT
					console.log(employee);
					return(<Card className={this.props.classes.root}>
					
						<CardActionArea>
        <CardMedia
		  className={this.props.classes.media}
		  component="img" 
          image= {"http://localhost:1337"+ employee.url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {employee.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
					</Card>)
				})
			}

			return(
				<div className="container text-left">
					<div className="row mb-2">
						
						{employees}

					</div>
				</div>
			)
    }
}


export default withStyles(styles)( EmployeeList);