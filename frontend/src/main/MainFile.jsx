import React from 'react'
import { Link } from "react-router-dom";
import { Button, Pane, Text, majorScale } from 'evergreen-ui';
const MainFile = () => {
    return(
 <div>
            <Link to={"/"}> <h1> Home Page</h1> </Link>
            <Link to={"/create"}>
                <Button  >
                    ➕
                </Button>
            </Link>
            </div>
    );
}


export default MainFile
