import React from 'react';
import {BrowserRouter as Router , Route,  withRouter} from 'react-router-dom';
 
import Index from './Dashboard/index';
import AddEdit from './Roles/AddEdit';
import UserRole from './Roles/UserRoles';


class Routes extends React.Component {

	render(){
		console.log("checking props: ", this.props);
		return (
			<Router>
				<Route  
					exact 
					path={"/add-role"} 
					component={
						() => <AddEdit />
					}
				/>

				<Route  
					exact 
					path={"/edit-role"} 
					component={
						() => <AddEdit />
					}
				/>

				<Route  
					exact 
					path={"/user-role"} 
					component={
						() => <UserRole />
					}
				/>

				<Route  
					exact 
					path={"/"} 
					component={
						() => <Index />
					}
				/>
				

			</Router>
		);
	}
}

export default withRouter(Routes);