import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getParentAdds} from '../../actions'

const Home = props =>{
    useEffect(()=>{
        props.getParentAdds(ParentAdd)
    })

    return(
        <>
            {props.ParentAdd
            ? props.ParentAdd.map(add=>{
                return(
                    <div key = {add.id}>
                        <h1>{add.headline}</h1>
                        <h3>{add.time} | {add.location}</h3>
                        <p>{add.body}</p>
                        <p>{add.comments}</p>
                        <button>Comment</button>{/*Does not work if not logged in */}
                    </div>
                )
            })
            :null}
        </>
    );
}


const mapStateToProps = state => state;

export default connect(mapStateToProps, {getParentAdds})(Home)
